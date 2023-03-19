<template>
  <button class="button">
    <span class="buttonContent">
      <slot />
    </span>
  </button>
</template>

<style lang="scss">
.button {
  padding: 4px 12px;
  border: none;
  border-radius: 2px;
  background: var(--color-primary-blue2);
  color: var(--color-foreground3);
  font-family: inherit;
  height: 55px;
  width: 60px;
  border-radius: 50%;
  margin-right: 5px;

  &:hover {
    background: var(--color-primary-blue4);
  }

  &:active {
    background: var(--color-primary-blue2);
  }

  &:disabled {
    background: var(--color-primary-blue1);

    .buttonContent {
      color: var(--app-foreground1);
      cursor: not-allowed;
    }
  }

  .buttonContent {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
