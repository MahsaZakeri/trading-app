<template>
  <div class="card">
    <slot name="card" />
  </div>
</template>

<style>
:root {
  --shadow-card: 0px 2px 8px rgba(0, 0, 0, 0.2);
}

.card {
  padding: 1px;
  border: 1px solid var(--color-foreground1);
  border-radius: 20px;
  box-shadow: var(--shadow-card);
  background-color: var(--color-foreground2);
}
</style>
