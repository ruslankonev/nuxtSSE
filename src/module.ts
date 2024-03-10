import {
  defineNuxtModule,
  addServerImportsDir,
  addImportsDir,
  createResolver,
  addServerHandler,
} from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "nuxtSSE",
    configKey: "myModule",
  },

  setup() {
    const resolver = createResolver(import.meta.url);

    addImportsDir(resolver.resolve("./runtime/composables"));
    addServerImportsDir(resolver.resolve("./runtime/server/composables"));

    addServerHandler({
      route: "/event-stream",
      handler: resolver.resolve("./runtime/server/serverEvents.get"),
    });
  },
});
