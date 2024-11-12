<template>
  <base-container>
    <!-- Logo -->
    <common-logo />

    <hr>

    <!-- Icons -->
    <base-icon name="close" />

    <hr>

    <!-- Inputs -->
    <base-label>Label</base-label>
    <base-input />
    <base-input :invalid="true" />

    <hr>

    <!-- Buttons -->
    <div>
      <base-button size="big">Button</base-button>
      <base-button>Button</base-button>
      <base-button size="small">Button</base-button>
      <base-button size="small" disabled>Button</base-button>
    </div>
    <div>
      <base-button size="big" theme="accent">Button</base-button>
      <base-button theme="accent">Button</base-button>
      <base-button size="small" theme="accent">Button</base-button>
      <base-button size="small" theme="accent" disabled>Button</base-button>
    </div>
    <div>
      <base-button size="big" theme="outline">Button</base-button>
      <base-button theme="outline">Button</base-button>
      <base-button size="small" theme="outline">Button</base-button>
      <base-button size="small" theme="outline" disabled>Button</base-button>
    </div>
    <div>
      <base-button size="big" theme="text">Button</base-button>
      <base-button theme="text">Button</base-button>
      <base-button size="small" theme="text">Button</base-button>
      <base-button size="small" theme="text" disabled>Button</base-button>
    </div>

    <hr>

    <!-- Headings -->
    <base-heading size="smallest">Heading</base-heading>
    <base-heading size="extra-small">Heading</base-heading>
    <base-heading size="small">Heading</base-heading>
    <base-heading size="medium">Heading</base-heading>
    <base-heading size="big">Heading</base-heading>
    <base-heading size="extra-big">Heading</base-heading>
    <base-heading size="extra-big" :uppercase="true">Heading</base-heading>
    <base-heading size="extra-big" :text-center="true">Heading</base-heading>

    <hr>

    <!-- Accordion -->
    <common-accordion>
      <common-accordion-item>
        <template #title>Title</template>
        <template #body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur, eaque, eius eligendi error fugiat itaque iusto possimus quaerat quas quasi sed similique voluptatum. Ab corporis earum fugiat id incidunt!
        </template>
      </common-accordion-item>
      <common-accordion-item>
        <template #title>Title</template>
        <template #body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur, eaque, eius eligendi error fugiat itaque iusto possimus quaerat quas quasi sed similique voluptatum. Ab corporis earum fugiat id incidunt!
        </template>
      </common-accordion-item>
      <common-accordion-item>
        <template #title>Title</template>
        <template #body>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur, eaque, eius eligendi error fugiat itaque iusto possimus quaerat quas quasi sed similique voluptatum. Ab corporis earum fugiat id incidunt!
        </template>
      </common-accordion-item>
    </common-accordion>

    <hr>

    <!-- Modal -->
    <common-modal v-if="false">
      <template #heading>Heading</template>
      modal
    </common-modal>

    <hr>

    <!-- Nav -->
    <common-nav />

    <hr>
  </base-container>
</template>

<style scoped lang="scss">
  hr {
    margin: 40px 0;
  }
</style>
<script setup lang="ts">
</script>