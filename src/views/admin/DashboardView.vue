<script>
import side from '@/components/Sidebar.vue'
    export default {
      components: {
        side,
      },
    data: () => ({
        cards: ["Today", "Yesterday"],
    }),
    beforeMount() {
            this.$router.push({ name: 'manage-accounts' })
    }
}
  </script>