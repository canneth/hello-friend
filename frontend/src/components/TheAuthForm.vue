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

if (userStore.value.user) router.back();

const formValues = ref({
  email: '',
  password: ''
});
const formErrors = ref<{
  email?: string | null,
  password?: string | null
}>({});

function validateInputOfField(fieldName: keyof typeof formValues.value) {
  switch (fieldName) {
    case 'email': {
      formErrors.value.email = ((email) => {
        if (!email) return 'Please enter an email';
        if (!/^.+@.+$/.test(email)) return 'Please enter a valid email';
        if (email.length > 50) return 'Please enter an email no longer than 50 characters';
        return null;
      })(formValues.value.email);
      break;
    }
    case 'password': {
      formErrors.value.password = ((password) => {
        if (!password) return 'Please enter a password';
        if (password.length > 50) return 'Please enter a password no longer than 50 characters';
        return null;
      })(formValues.value.password);
      break;
    }
    default: return;
  }
}

function clickHandlerLoginRedirectLink(e: MouseEvent) {
  e.preventDefault();
  router.push('/login');
}
async function clickHandlerRegisterButton(e: MouseEvent) {
  e.preventDefault();
  try {
    await backendAxios.post('/api/register', formValues.value);
    const { data: { userId } } = await backendAxios.post<{ userId: User['userId'] }>('/api/auth/login', formValues);
    localStorage.setItem('hellofriend_loggedInUserId', userId);
    const { data: { user } } = await backendAxios.get<{ user: LoggedInUser }>(`/api/users/${userId}`);
    userStore.value.setUser(user);
    router.back();
  } catch (err) {
    console.log(err);
    if (axios.isAxiosError(err)) {
      if (err.response) {
        if (err.response.status === 409) formErrors.value.email = 'A user with that email already exists';
      }
    }
  }
}
function clickHandlerLoginButton(e: MouseEvent) {
  e.preventDefault();
  /*
    TODO:
    * Make call to backend to log user in.
    * Store logged-in userId in local storage.
    * Set logged-in user in store.
  */
}

</script>

<template>
  <div :class="$style.overallContainer">
    <h1 :class="$style.title">
      Welcome!
    </h1>
    <form :class="$style.form">
      <div :class="[
        $style.fieldContainer,
        formErrors.email === null && $style.validInput,
        formErrors.email && $style.invalidInput
      ]">
        <label name="email">
          Email
        </label>
        <input name="email" type="text" v-model="formValues.email" @focusout="validateInputOfField('email')" />
        <p :class="$style.errorMessage">
          {{ formErrors.email }}
        </p>
      </div>
      <div :class="[
        $style.fieldContainer,
        formErrors.password === null && $style.validInput,
        formErrors.password && $style.invalidInput
      ]">
        <!-- TODO: Add a show-password toggle button -->
        <label name="password">
          Password
        </label>
        <input name="password" type="password" v-model="formValues.password" @focusout="validateInputOfField('password')" />
        <p :class="$style.errorMessage">
          {{ formErrors.password }}
        </p>
      </div>
    </form>
    <div :class="$style.redirectLine">
      <p>
        Already have an account?
      </p>
      <a href="" @click="clickHandlerLoginRedirectLink">
        Log in
      </a>
    </div>
    <CommonButton v-if="type === 'register'" :class="$style.submitButton" type="primary" text="Register" @click="clickHandlerRegisterButton" />
    <CommonButton v-if="type === 'login'" :class="$style.submitButton" type="primary" text="Log In" @click="clickHandlerLoginButton" />
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