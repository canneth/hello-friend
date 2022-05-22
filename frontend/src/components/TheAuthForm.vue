<script setup lang="ts">

import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import CommonButton from '@/components/common/CommonButton.vue';
import useUserStore from '@/composables/useUserStore';
import backendAxios from '@/globals/configuredAxios';
import type User from '@/schemas/User';
import type { LoggedInUser } from '@/store/userStore';

const props = defineProps<{
  type: 'login' | 'register';
}>()

const router = useRouter();
const userStore = useUserStore();

const formValuesRef = ref({
  email: '',
  password: ''
});
const formErrorsRef = ref<{
  email?: string | null,
  password?: string | null
}>({});

function validateInputOfField(fieldName: keyof typeof formValuesRef.value) {
  switch (fieldName) {
    case 'email': {
      formErrorsRef.value.email = ((email) => {
        if (!email) return 'Please enter an email';
        if (!/^.+@.+$/.test(email)) return 'Please enter a valid email';
        if (email.length > 50) return 'Please enter an email no longer than 50 characters';
        return null;
      })(formValuesRef.value.email);
      break;
    }
    case 'password': {
      formErrorsRef.value.password = ((password) => {
        if (!password) return 'Please enter a password';
        if (password.length > 50) return 'Please enter a password no longer than 50 characters';
        return null;
      })(formValuesRef.value.password);
      break;
    }
    default: return;
  }
}

/* Props into title */

const titleText = (() => {
  switch (props.type) {
    case 'register': return 'Welcome!';
    case 'login': return `Welcome Back!`;
  }
})();

/* Props into redirect line */

const redirectPromptText = (() => {
  switch (props.type) {
    case 'register': return 'Already have an account?';
    case 'login': return `Don't have an account yet?`;
  }
})();

const redirectLinkText = (() => {
  switch (props.type) {
    case 'register': return 'Log in';
    case 'login': return 'Sign up';
  }
})();

function clickHandlerRedirectLink(e: MouseEvent) {
  e.preventDefault();
  switch (props.type) {
    case 'register': {
      router.push('/login');
      break;
    }
    case 'login': {
      router.push('/register');
      break;
    }
  }
}

/* Props into submit button */

const submitButtonText = (() => {
  switch (props.type) {
    case 'register': return 'Register';
    case 'login': return 'Login';
  }
})();

async function clickHandlerSubmitButton(e: MouseEvent) {
  e.preventDefault();
  for (const field of Object.keys(formValuesRef.value) as (keyof typeof formValuesRef.value)[]) validateInputOfField(field);
  if (Object.values(formErrorsRef.value).some(errorMessage => errorMessage === undefined || errorMessage !== null)) return;
  try {
    if (props.type === 'register') await backendAxios.post('/api/register', formValuesRef.value);
    const { data: { userId } } = await backendAxios.post<{ userId: User['userId'] }>('/api/auth/login', formValuesRef.value);
    localStorage.setItem('hellofriend_loggedInUserId', userId);
    const { data: { user } } = await backendAxios.get<{ user: LoggedInUser }>(`/api/users/${userId}`);
    userStore.value.setUser(user);
    router.back();
  } catch (err) {
    console.log(err);
    if (!axios.isAxiosError(err)) return;
    if (!err.response) return;
    switch (props.type) {
      case 'register': {
        if (err.response.status === 409) formErrorsRef.value.email = 'A user with that email already exists';
        break;
      }
      case 'login': {
        if (err.response.status === 401) {
          formErrorsRef.value.email = 'Email or password may be incorrect';
          formErrorsRef.value.password = 'Email or password may be incorrect';
        }
      }
    }
  }
}

</script>

<template>
  <div :class="$style.overallContainer">
    <h1 :class="$style.title">
      {{ titleText }}
    </h1>
    <form :class="$style.form">
      <div :class="[
        $style.fieldContainer,
        formErrorsRef.email === null && $style.validInput,
        formErrorsRef.email && $style.invalidInput
      ]">
        <label name="email">
          Email
        </label>
        <input name="email" type="text" v-model="formValuesRef.email" @focusout="validateInputOfField('email')" />
        <p :class="$style.errorMessage">
          {{ formErrorsRef.email }}
        </p>
      </div>
      <div :class="[
        $style.fieldContainer,
        formErrorsRef.password === null && $style.validInput,
        formErrorsRef.password && $style.invalidInput
      ]">
        <!-- TODO: Add a show-password toggle button -->
        <label name="password">
          Password
        </label>
        <input name="password" type="password" v-model="formValuesRef.password" @focusout="validateInputOfField('password')" />
        <p :class="$style.errorMessage">
          {{ formErrorsRef.password }}
        </p>
      </div>
    </form>
    <div :class="$style.redirectLine">
      <p>
        {{ redirectPromptText }}
      </p>
      <a href="" @click="clickHandlerRedirectLink">
        {{ redirectLinkText }}
      </a>
    </div>
    <CommonButton :class="$style.submitButton" type="primary" :text="submitButtonText" @click="clickHandlerSubmitButton" />
  </div>
</template>

<style module>
.overallContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: var(--font-size-largest);
  color: var(--color-primary-base);
  font-weight: bold;
  margin-bottom: 60px;
}

.form {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: min(60vw, 350px);
  margin-bottom: 40px;
}

.fieldContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.fieldContainer > label {
  position: relative;
  margin-bottom: 10px;
}
.fieldContainer > input {
  padding: 10px;
  background-color: var(--color-contrast-dark);
}
.fieldContainer > .errorMessage {
  margin-top: 10px;
  font-size: var(--font-size-small);
  color: var(--color-status-error);
}
.fieldContainer > input:focus {
  outline: rgba(255, 255, 255, 0.1) solid 1px;
}

.fieldContainer.invalidInput > label {
  color: var(--color-status-error);
}
.fieldContainer.invalidInput > input {
  outline: var(--color-status-error) solid 1px;
}
.fieldContainer.validInput > label {
  color: var(--color-status-ok);
}
.fieldContainer.validInput > input {
  outline: var(--color-status-ok) solid 1px;
}

.redirectLine {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 40px;
}
.redirectLine > p,
a {
  font-size: var(--font-size-small);
}
.submitButton {
  width: 100%;
}
</style>