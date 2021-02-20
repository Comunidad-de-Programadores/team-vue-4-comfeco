<template>
  <section class="view-dashboard">
    <PxDashboard />
    <AppCountdown 
      title="Preparate lo bueno esta por venir" 
      diaevento="12 24 2021 23:59:59" />
  </section>
</template>

<script>
import PxDashboard from "@/components/Home/PxDashboard";
import AppCountdown from '@/components/AppCountdown';
export default {
  name: "Dashboard",
  components: {
    PxDashboard,
    AppCountdown,
  },
};
</script>

<style scoped lang="scss"></style>
