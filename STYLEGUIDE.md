Web Component Style Guide
===

1) Declarative `on-*` event handler method names doesn't have a underscore prefix (`_`) in their names
2) Private properties and method names are prefixed by an underscore.
3) Member variables initial/default values MUST NOT be declared in the prototype when they're objects or arrays,
   this could result in unexpected shared-state behaviour.
4) Declarative element usage MUST be avoided when the declarative component processes events that shouldn't execute
   one time only. Or the component ensures that multiple instances are serialized. It's better to use a singleton
   as the Polymer guide proposes.
5) Naming convention: company prefix + main usage
    examples:
        - ivx-page-*    classical pages/views
        - ivx-qtype-*   question types/survey elements
6) Polymer elements without any script part MUST have noscript set.