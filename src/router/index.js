import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ForgotPassword from '@/components/ForgotPassword'
import ResetPasswordForm from '@/components/ResetPasswordForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ForgotPassword,
      meta: {
        auth: false
      }
    },
    {
      path: '/reset-password/:token',
      name: 'reset-password-form',
      component: ResetPasswordForm,
      meta: {
        auth: false
      }
    }
  ]
})
