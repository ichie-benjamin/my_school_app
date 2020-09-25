<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
<!--      <router-view />-->
      <transition :name="transitionName">
        <keep-alive>
          <router-view class="child-slide"></router-view>
        </keep-alive>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>

  export default {
    data () {
      return {
        transitionName: ''
      }
    },
    beforeRouteUpdate (to, from, next) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'overlap-left' : 'overlap-right'
      next()
    }

    // mixins: [mixinOtherUserDetails],
    // computed: {
    //   ...mapState('store', ['userDetails']),
    //   title() {
    //     let currentPath = this.$route.fullPath
    //     if (currentPath == '/') return 'SmackChat'
    //     else if (currentPath.includes('/chat')) return this.otherUserDetails.name
    //     else if (currentPath == '/auth') return 'Login'
    //   }
    // },
    // methods: {
    //   ...mapActions('store', ['logoutUser'])
    // }
  }
</script>

<style lang="scss">

</style>
