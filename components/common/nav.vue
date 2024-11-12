<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item">
        <nuxt-link class="nav-link active">
          <base-icon class="nav-icon nav-icon-home" name="home" />
          Home
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link">
          <base-icon class="nav-icon nav-icon-tools" name="tools" />
          Maintenance
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link">
          <base-icon class="nav-icon nav-icon-avatar" name="avatar" />
          You
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
  .nav {

    &-list {
      display: flex;
      justify-content: space-between;

      & > *:not(:last-child) {
        margin-right: var(--gap-medium);
      }
    }

    &-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.688rem;
      font-weight: var(--font-weight-semi-bold);
      text-decoration: none;
      text-align: center;
      color: var(--bombay-700);

      &.active {
        .nav-icon {
          &-home,
          &-avatar {
            :deep(path) {
              fill: var(--black-100)
            }
          }

          &-tools {
            :deep(path) {
              stroke: var(--black-100)
            }
          }
        }
      }
    }

    &-icon {
      margin-bottom: 4px;

      &-home,
      &-avatar {
        :deep(path) {
          fill: var(--bombay-700)
        }
      }

      &-tools {
        :deep(path) {
          stroke: var(--bombay-700)
        }
      }
    }
  }
</style>