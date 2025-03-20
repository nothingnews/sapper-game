
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'GameBoard': typeof import("../src/components/GameBoard.vue")['default']
    'GameMenu': typeof import("../src/components/GameMenu.vue")['default']
    'SettingsForm': typeof import("../src/components/SettingsForm.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'BAccordion': typeof import("bootstrap-vue-next/components/BAccordion")['BAccordion']
    'BAccordionItem': typeof import("bootstrap-vue-next/components/BAccordion")['BAccordionItem']
    'BAlert': typeof import("bootstrap-vue-next/components/BAlert")['BAlert']
    'BAvatar': typeof import("bootstrap-vue-next/components/BAvatar")['BAvatar']
    'BAvatarGroup': typeof import("bootstrap-vue-next/components/BAvatar")['BAvatarGroup']
    'BBadge': typeof import("bootstrap-vue-next/components/BBadge")['BBadge']
    'BBreadcrumb': typeof import("bootstrap-vue-next/components/BBreadcrumb")['BBreadcrumb']
    'BBreadcrumbItem': typeof import("bootstrap-vue-next/components/BBreadcrumb")['BBreadcrumbItem']
    'BButton': typeof import("bootstrap-vue-next/components/BButton")['BButton']
    'BButtonGroup': typeof import("bootstrap-vue-next/components/BButton")['BButtonGroup']
    'BButtonToolbar': typeof import("bootstrap-vue-next/components/BButton")['BButtonToolbar']
    'BCloseButton': typeof import("bootstrap-vue-next/components/BButton")['BCloseButton']
    'BCard': typeof import("bootstrap-vue-next/components/BCard")['BCard']
    'BCardBody': typeof import("bootstrap-vue-next/components/BCard")['BCardBody']
    'BCardFooter': typeof import("bootstrap-vue-next/components/BCard")['BCardFooter']
    'BCardGroup': typeof import("bootstrap-vue-next/components/BCard")['BCardGroup']
    'BCardHeader': typeof import("bootstrap-vue-next/components/BCard")['BCardHeader']
    'BCardImg': typeof import("bootstrap-vue-next/components/BCard")['BCardImg']
    'BCardSubtitle': typeof import("bootstrap-vue-next/components/BCard")['BCardSubtitle']
    'BCardText': typeof import("bootstrap-vue-next/components/BCard")['BCardText']
    'BCardTitle': typeof import("bootstrap-vue-next/components/BCard")['BCardTitle']
    'BCarousel': typeof import("bootstrap-vue-next/components/BCarousel")['BCarousel']
    'BCarouselSlide': typeof import("bootstrap-vue-next/components/BCarousel")['BCarouselSlide']
    'BCol': typeof import("bootstrap-vue-next/components/BContainer")['BCol']
    'BCollapse': typeof import("bootstrap-vue-next/components/BCollapse")['BCollapse']
    'BContainer': typeof import("bootstrap-vue-next/components/BContainer")['BContainer']
    'BDropdown': typeof import("bootstrap-vue-next/components/BDropdown")['BDropdown']
    'BDropdownDivider': typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownDivider']
    'BDropdownForm': typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownForm']
    'BDropdownGroup': typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownGroup']
    'BDropdownHeader': typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownHeader']
    'BDropdownItem': typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownItem']
    'BDropdownItemButton': typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownItemButton']
    'BDropdownText': typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownText']
    'BForm': typeof import("bootstrap-vue-next/components/BForm")['BForm']
    'BFormCheckbox': typeof import("bootstrap-vue-next/components/BFormCheckbox")['BFormCheckbox']
    'BFormCheckboxGroup': typeof import("bootstrap-vue-next/components/BFormCheckbox")['BFormCheckboxGroup']
    'BFormDatalist': typeof import("bootstrap-vue-next/components/BForm")['BFormDatalist']
    'BFormFile': typeof import("bootstrap-vue-next/components/BFormFile")['BFormFile']
    'BFormFloatingLabel': typeof import("bootstrap-vue-next/components/BForm")['BFormFloatingLabel']
    'BFormGroup': typeof import("bootstrap-vue-next/components/BFormGroup")['BFormGroup']
    'BFormInput': typeof import("bootstrap-vue-next/components/BFormInput")['BFormInput']
    'BFormInvalidFeedback': typeof import("bootstrap-vue-next/components/BForm")['BFormInvalidFeedback']
    'BFormRadio': typeof import("bootstrap-vue-next/components/BFormRadio")['BFormRadio']
    'BFormRadioGroup': typeof import("bootstrap-vue-next/components/BFormRadio")['BFormRadioGroup']
    'BFormRow': typeof import("bootstrap-vue-next/components/BForm")['BFormRow']
    'BFormSelect': typeof import("bootstrap-vue-next/components/BFormSelect")['BFormSelect']
    'BFormSelectOption': typeof import("bootstrap-vue-next/components/BFormSelect")['BFormSelectOption']
    'BFormSelectOptionGroup': typeof import("bootstrap-vue-next/components/BFormSelect")['BFormSelectOptionGroup']
    'BFormSpinbutton': typeof import("bootstrap-vue-next/components/BFormSpinbutton")['BFormSpinbutton']
    'BFormTag': typeof import("bootstrap-vue-next/components/BFormTags")['BFormTag']
    'BFormTags': typeof import("bootstrap-vue-next/components/BFormTags")['BFormTags']
    'BFormText': typeof import("bootstrap-vue-next/components/BForm")['BFormText']
    'BFormTextarea': typeof import("bootstrap-vue-next/components/BFormTextarea")['BFormTextarea']
    'BFormValidFeedback': typeof import("bootstrap-vue-next/components/BForm")['BFormValidFeedback']
    'BImg': typeof import("bootstrap-vue-next/components/BImg")['BImg']
    'BInput': typeof import("bootstrap-vue-next/components/BFormInput")['BInput']
    'BInputGroup': typeof import("bootstrap-vue-next/components/BInputGroup")['BInputGroup']
    'BInputGroupText': typeof import("bootstrap-vue-next/components/BInputGroup")['BInputGroupText']
    'BListGroup': typeof import("bootstrap-vue-next/components/BListGroup")['BListGroup']
    'BListGroupItem': typeof import("bootstrap-vue-next/components/BListGroup")['BListGroupItem']
    'BModal': typeof import("bootstrap-vue-next/components/BModal")['BModal']
    'BModalOrchestrator': typeof import("bootstrap-vue-next/components/BModal")['BModalOrchestrator']
    'BNav': typeof import("bootstrap-vue-next/components/BNav")['BNav']
    'BNavForm': typeof import("bootstrap-vue-next/components/BNav")['BNavForm']
    'BNavItem': typeof import("bootstrap-vue-next/components/BNav")['BNavItem']
    'BNavItemDropdown': typeof import("bootstrap-vue-next/components/BNav")['BNavItemDropdown']
    'BNavText': typeof import("bootstrap-vue-next/components/BNav")['BNavText']
    'BNavbar': typeof import("bootstrap-vue-next/components/BNavbar")['BNavbar']
    'BNavbarBrand': typeof import("bootstrap-vue-next/components/BNavbar")['BNavbarBrand']
    'BNavbarNav': typeof import("bootstrap-vue-next/components/BNavbar")['BNavbarNav']
    'BNavbarToggle': typeof import("bootstrap-vue-next/components/BNavbar")['BNavbarToggle']
    'BOffcanvas': typeof import("bootstrap-vue-next/components/BOffcanvas")['BOffcanvas']
    'BOverlay': typeof import("bootstrap-vue-next/components/BOverlay")['BOverlay']
    'BPagination': typeof import("bootstrap-vue-next/components/BPagination")['BPagination']
    'BPlaceholder': typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholder']
    'BPlaceholderButton': typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholderButton']
    'BPlaceholderCard': typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholderCard']
    'BPlaceholderTable': typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholderTable']
    'BPlaceholderWrapper': typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholderWrapper']
    'BPopover': typeof import("bootstrap-vue-next/components/BPopover")['BPopover']
    'BProgress': typeof import("bootstrap-vue-next/components/BProgress")['BProgress']
    'BRow': typeof import("bootstrap-vue-next/components/BContainer")['BRow']
    'BSpinner': typeof import("bootstrap-vue-next/components/BSpinner")['BSpinner']
    'BTab': typeof import("bootstrap-vue-next/components/BTabs")['BTab']
    'BTabs': typeof import("bootstrap-vue-next/components/BTabs")['BTabs']
    'BToast': typeof import("bootstrap-vue-next/components/BToast")['BToast']
    'BToastOrchestrator': typeof import("bootstrap-vue-next/components/BToast")['BToastOrchestrator']
    'BTooltip': typeof import("bootstrap-vue-next/components/BTooltip")['BTooltip']
    'BLink': typeof import("bootstrap-vue-next/components/BLink")['BLink']
    'BProgressBar': typeof import("bootstrap-vue-next/components/BProgress")['BProgressBar']
    'BTableSimple': typeof import("bootstrap-vue-next/components/BTable")['BTableSimple']
    'BTableLite': typeof import("bootstrap-vue-next/components/BTable")['BTableLite']
    'BTable': typeof import("bootstrap-vue-next/components/BTable")['BTable']
    'BTbody': typeof import("bootstrap-vue-next/components/BTable")['BTbody']
    'BTd': typeof import("bootstrap-vue-next/components/BTable")['BTd']
    'BTh': typeof import("bootstrap-vue-next/components/BTable")['BTh']
    'BThead': typeof import("bootstrap-vue-next/components/BTable")['BThead']
    'BTfoot': typeof import("bootstrap-vue-next/components/BTable")['BTfoot']
    'BTr': typeof import("bootstrap-vue-next/components/BTable")['BTr']
    'BPopoverOrchestrator': typeof import("bootstrap-vue-next/components/BPopover")['BPopoverOrchestrator']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyGameBoard': LazyComponent<typeof import("../src/components/GameBoard.vue")['default']>
    'LazyGameMenu': LazyComponent<typeof import("../src/components/GameMenu.vue")['default']>
    'LazySettingsForm': LazyComponent<typeof import("../src/components/SettingsForm.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyBAccordion': LazyComponent<typeof import("bootstrap-vue-next/components/BAccordion")['BAccordion']>
    'LazyBAccordionItem': LazyComponent<typeof import("bootstrap-vue-next/components/BAccordion")['BAccordionItem']>
    'LazyBAlert': LazyComponent<typeof import("bootstrap-vue-next/components/BAlert")['BAlert']>
    'LazyBAvatar': LazyComponent<typeof import("bootstrap-vue-next/components/BAvatar")['BAvatar']>
    'LazyBAvatarGroup': LazyComponent<typeof import("bootstrap-vue-next/components/BAvatar")['BAvatarGroup']>
    'LazyBBadge': LazyComponent<typeof import("bootstrap-vue-next/components/BBadge")['BBadge']>
    'LazyBBreadcrumb': LazyComponent<typeof import("bootstrap-vue-next/components/BBreadcrumb")['BBreadcrumb']>
    'LazyBBreadcrumbItem': LazyComponent<typeof import("bootstrap-vue-next/components/BBreadcrumb")['BBreadcrumbItem']>
    'LazyBButton': LazyComponent<typeof import("bootstrap-vue-next/components/BButton")['BButton']>
    'LazyBButtonGroup': LazyComponent<typeof import("bootstrap-vue-next/components/BButton")['BButtonGroup']>
    'LazyBButtonToolbar': LazyComponent<typeof import("bootstrap-vue-next/components/BButton")['BButtonToolbar']>
    'LazyBCloseButton': LazyComponent<typeof import("bootstrap-vue-next/components/BButton")['BCloseButton']>
    'LazyBCard': LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCard']>
    'LazyBCardBody': LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCardBody']>
    'LazyBCardFooter': LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCardFooter']>
    'LazyBCardGroup': LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCardGroup']>
    'LazyBCardHeader': LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCardHeader']>
    'LazyBCardImg': LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCardImg']>
    'LazyBCardSubtitle': LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCardSubtitle']>
    'LazyBCardText': LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCardText']>
    'LazyBCardTitle': LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCardTitle']>
    'LazyBCarousel': LazyComponent<typeof import("bootstrap-vue-next/components/BCarousel")['BCarousel']>
    'LazyBCarouselSlide': LazyComponent<typeof import("bootstrap-vue-next/components/BCarousel")['BCarouselSlide']>
    'LazyBCol': LazyComponent<typeof import("bootstrap-vue-next/components/BContainer")['BCol']>
    'LazyBCollapse': LazyComponent<typeof import("bootstrap-vue-next/components/BCollapse")['BCollapse']>
    'LazyBContainer': LazyComponent<typeof import("bootstrap-vue-next/components/BContainer")['BContainer']>
    'LazyBDropdown': LazyComponent<typeof import("bootstrap-vue-next/components/BDropdown")['BDropdown']>
    'LazyBDropdownDivider': LazyComponent<typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownDivider']>
    'LazyBDropdownForm': LazyComponent<typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownForm']>
    'LazyBDropdownGroup': LazyComponent<typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownGroup']>
    'LazyBDropdownHeader': LazyComponent<typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownHeader']>
    'LazyBDropdownItem': LazyComponent<typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownItem']>
    'LazyBDropdownItemButton': LazyComponent<typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownItemButton']>
    'LazyBDropdownText': LazyComponent<typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownText']>
    'LazyBForm': LazyComponent<typeof import("bootstrap-vue-next/components/BForm")['BForm']>
    'LazyBFormCheckbox': LazyComponent<typeof import("bootstrap-vue-next/components/BFormCheckbox")['BFormCheckbox']>
    'LazyBFormCheckboxGroup': LazyComponent<typeof import("bootstrap-vue-next/components/BFormCheckbox")['BFormCheckboxGroup']>
    'LazyBFormDatalist': LazyComponent<typeof import("bootstrap-vue-next/components/BForm")['BFormDatalist']>
    'LazyBFormFile': LazyComponent<typeof import("bootstrap-vue-next/components/BFormFile")['BFormFile']>
    'LazyBFormFloatingLabel': LazyComponent<typeof import("bootstrap-vue-next/components/BForm")['BFormFloatingLabel']>
    'LazyBFormGroup': LazyComponent<typeof import("bootstrap-vue-next/components/BFormGroup")['BFormGroup']>
    'LazyBFormInput': LazyComponent<typeof import("bootstrap-vue-next/components/BFormInput")['BFormInput']>
    'LazyBFormInvalidFeedback': LazyComponent<typeof import("bootstrap-vue-next/components/BForm")['BFormInvalidFeedback']>
    'LazyBFormRadio': LazyComponent<typeof import("bootstrap-vue-next/components/BFormRadio")['BFormRadio']>
    'LazyBFormRadioGroup': LazyComponent<typeof import("bootstrap-vue-next/components/BFormRadio")['BFormRadioGroup']>
    'LazyBFormRow': LazyComponent<typeof import("bootstrap-vue-next/components/BForm")['BFormRow']>
    'LazyBFormSelect': LazyComponent<typeof import("bootstrap-vue-next/components/BFormSelect")['BFormSelect']>
    'LazyBFormSelectOption': LazyComponent<typeof import("bootstrap-vue-next/components/BFormSelect")['BFormSelectOption']>
    'LazyBFormSelectOptionGroup': LazyComponent<typeof import("bootstrap-vue-next/components/BFormSelect")['BFormSelectOptionGroup']>
    'LazyBFormSpinbutton': LazyComponent<typeof import("bootstrap-vue-next/components/BFormSpinbutton")['BFormSpinbutton']>
    'LazyBFormTag': LazyComponent<typeof import("bootstrap-vue-next/components/BFormTags")['BFormTag']>
    'LazyBFormTags': LazyComponent<typeof import("bootstrap-vue-next/components/BFormTags")['BFormTags']>
    'LazyBFormText': LazyComponent<typeof import("bootstrap-vue-next/components/BForm")['BFormText']>
    'LazyBFormTextarea': LazyComponent<typeof import("bootstrap-vue-next/components/BFormTextarea")['BFormTextarea']>
    'LazyBFormValidFeedback': LazyComponent<typeof import("bootstrap-vue-next/components/BForm")['BFormValidFeedback']>
    'LazyBImg': LazyComponent<typeof import("bootstrap-vue-next/components/BImg")['BImg']>
    'LazyBInput': LazyComponent<typeof import("bootstrap-vue-next/components/BFormInput")['BInput']>
    'LazyBInputGroup': LazyComponent<typeof import("bootstrap-vue-next/components/BInputGroup")['BInputGroup']>
    'LazyBInputGroupText': LazyComponent<typeof import("bootstrap-vue-next/components/BInputGroup")['BInputGroupText']>
    'LazyBListGroup': LazyComponent<typeof import("bootstrap-vue-next/components/BListGroup")['BListGroup']>
    'LazyBListGroupItem': LazyComponent<typeof import("bootstrap-vue-next/components/BListGroup")['BListGroupItem']>
    'LazyBModal': LazyComponent<typeof import("bootstrap-vue-next/components/BModal")['BModal']>
    'LazyBModalOrchestrator': LazyComponent<typeof import("bootstrap-vue-next/components/BModal")['BModalOrchestrator']>
    'LazyBNav': LazyComponent<typeof import("bootstrap-vue-next/components/BNav")['BNav']>
    'LazyBNavForm': LazyComponent<typeof import("bootstrap-vue-next/components/BNav")['BNavForm']>
    'LazyBNavItem': LazyComponent<typeof import("bootstrap-vue-next/components/BNav")['BNavItem']>
    'LazyBNavItemDropdown': LazyComponent<typeof import("bootstrap-vue-next/components/BNav")['BNavItemDropdown']>
    'LazyBNavText': LazyComponent<typeof import("bootstrap-vue-next/components/BNav")['BNavText']>
    'LazyBNavbar': LazyComponent<typeof import("bootstrap-vue-next/components/BNavbar")['BNavbar']>
    'LazyBNavbarBrand': LazyComponent<typeof import("bootstrap-vue-next/components/BNavbar")['BNavbarBrand']>
    'LazyBNavbarNav': LazyComponent<typeof import("bootstrap-vue-next/components/BNavbar")['BNavbarNav']>
    'LazyBNavbarToggle': LazyComponent<typeof import("bootstrap-vue-next/components/BNavbar")['BNavbarToggle']>
    'LazyBOffcanvas': LazyComponent<typeof import("bootstrap-vue-next/components/BOffcanvas")['BOffcanvas']>
    'LazyBOverlay': LazyComponent<typeof import("bootstrap-vue-next/components/BOverlay")['BOverlay']>
    'LazyBPagination': LazyComponent<typeof import("bootstrap-vue-next/components/BPagination")['BPagination']>
    'LazyBPlaceholder': LazyComponent<typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholder']>
    'LazyBPlaceholderButton': LazyComponent<typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholderButton']>
    'LazyBPlaceholderCard': LazyComponent<typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholderCard']>
    'LazyBPlaceholderTable': LazyComponent<typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholderTable']>
    'LazyBPlaceholderWrapper': LazyComponent<typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholderWrapper']>
    'LazyBPopover': LazyComponent<typeof import("bootstrap-vue-next/components/BPopover")['BPopover']>
    'LazyBProgress': LazyComponent<typeof import("bootstrap-vue-next/components/BProgress")['BProgress']>
    'LazyBRow': LazyComponent<typeof import("bootstrap-vue-next/components/BContainer")['BRow']>
    'LazyBSpinner': LazyComponent<typeof import("bootstrap-vue-next/components/BSpinner")['BSpinner']>
    'LazyBTab': LazyComponent<typeof import("bootstrap-vue-next/components/BTabs")['BTab']>
    'LazyBTabs': LazyComponent<typeof import("bootstrap-vue-next/components/BTabs")['BTabs']>
    'LazyBToast': LazyComponent<typeof import("bootstrap-vue-next/components/BToast")['BToast']>
    'LazyBToastOrchestrator': LazyComponent<typeof import("bootstrap-vue-next/components/BToast")['BToastOrchestrator']>
    'LazyBTooltip': LazyComponent<typeof import("bootstrap-vue-next/components/BTooltip")['BTooltip']>
    'LazyBLink': LazyComponent<typeof import("bootstrap-vue-next/components/BLink")['BLink']>
    'LazyBProgressBar': LazyComponent<typeof import("bootstrap-vue-next/components/BProgress")['BProgressBar']>
    'LazyBTableSimple': LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BTableSimple']>
    'LazyBTableLite': LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BTableLite']>
    'LazyBTable': LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BTable']>
    'LazyBTbody': LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BTbody']>
    'LazyBTd': LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BTd']>
    'LazyBTh': LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BTh']>
    'LazyBThead': LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BThead']>
    'LazyBTfoot': LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BTfoot']>
    'LazyBTr': LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BTr']>
    'LazyBPopoverOrchestrator': LazyComponent<typeof import("bootstrap-vue-next/components/BPopover")['BPopoverOrchestrator']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const GameBoard: typeof import("../src/components/GameBoard.vue")['default']
export const GameMenu: typeof import("../src/components/GameMenu.vue")['default']
export const SettingsForm: typeof import("../src/components/SettingsForm.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const BAccordion: typeof import("bootstrap-vue-next/components/BAccordion")['BAccordion']
export const BAccordionItem: typeof import("bootstrap-vue-next/components/BAccordion")['BAccordionItem']
export const BAlert: typeof import("bootstrap-vue-next/components/BAlert")['BAlert']
export const BAvatar: typeof import("bootstrap-vue-next/components/BAvatar")['BAvatar']
export const BAvatarGroup: typeof import("bootstrap-vue-next/components/BAvatar")['BAvatarGroup']
export const BBadge: typeof import("bootstrap-vue-next/components/BBadge")['BBadge']
export const BBreadcrumb: typeof import("bootstrap-vue-next/components/BBreadcrumb")['BBreadcrumb']
export const BBreadcrumbItem: typeof import("bootstrap-vue-next/components/BBreadcrumb")['BBreadcrumbItem']
export const BButton: typeof import("bootstrap-vue-next/components/BButton")['BButton']
export const BButtonGroup: typeof import("bootstrap-vue-next/components/BButton")['BButtonGroup']
export const BButtonToolbar: typeof import("bootstrap-vue-next/components/BButton")['BButtonToolbar']
export const BCloseButton: typeof import("bootstrap-vue-next/components/BButton")['BCloseButton']
export const BCard: typeof import("bootstrap-vue-next/components/BCard")['BCard']
export const BCardBody: typeof import("bootstrap-vue-next/components/BCard")['BCardBody']
export const BCardFooter: typeof import("bootstrap-vue-next/components/BCard")['BCardFooter']
export const BCardGroup: typeof import("bootstrap-vue-next/components/BCard")['BCardGroup']
export const BCardHeader: typeof import("bootstrap-vue-next/components/BCard")['BCardHeader']
export const BCardImg: typeof import("bootstrap-vue-next/components/BCard")['BCardImg']
export const BCardSubtitle: typeof import("bootstrap-vue-next/components/BCard")['BCardSubtitle']
export const BCardText: typeof import("bootstrap-vue-next/components/BCard")['BCardText']
export const BCardTitle: typeof import("bootstrap-vue-next/components/BCard")['BCardTitle']
export const BCarousel: typeof import("bootstrap-vue-next/components/BCarousel")['BCarousel']
export const BCarouselSlide: typeof import("bootstrap-vue-next/components/BCarousel")['BCarouselSlide']
export const BCol: typeof import("bootstrap-vue-next/components/BContainer")['BCol']
export const BCollapse: typeof import("bootstrap-vue-next/components/BCollapse")['BCollapse']
export const BContainer: typeof import("bootstrap-vue-next/components/BContainer")['BContainer']
export const BDropdown: typeof import("bootstrap-vue-next/components/BDropdown")['BDropdown']
export const BDropdownDivider: typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownDivider']
export const BDropdownForm: typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownForm']
export const BDropdownGroup: typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownGroup']
export const BDropdownHeader: typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownHeader']
export const BDropdownItem: typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownItem']
export const BDropdownItemButton: typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownItemButton']
export const BDropdownText: typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownText']
export const BForm: typeof import("bootstrap-vue-next/components/BForm")['BForm']
export const BFormCheckbox: typeof import("bootstrap-vue-next/components/BFormCheckbox")['BFormCheckbox']
export const BFormCheckboxGroup: typeof import("bootstrap-vue-next/components/BFormCheckbox")['BFormCheckboxGroup']
export const BFormDatalist: typeof import("bootstrap-vue-next/components/BForm")['BFormDatalist']
export const BFormFile: typeof import("bootstrap-vue-next/components/BFormFile")['BFormFile']
export const BFormFloatingLabel: typeof import("bootstrap-vue-next/components/BForm")['BFormFloatingLabel']
export const BFormGroup: typeof import("bootstrap-vue-next/components/BFormGroup")['BFormGroup']
export const BFormInput: typeof import("bootstrap-vue-next/components/BFormInput")['BFormInput']
export const BFormInvalidFeedback: typeof import("bootstrap-vue-next/components/BForm")['BFormInvalidFeedback']
export const BFormRadio: typeof import("bootstrap-vue-next/components/BFormRadio")['BFormRadio']
export const BFormRadioGroup: typeof import("bootstrap-vue-next/components/BFormRadio")['BFormRadioGroup']
export const BFormRow: typeof import("bootstrap-vue-next/components/BForm")['BFormRow']
export const BFormSelect: typeof import("bootstrap-vue-next/components/BFormSelect")['BFormSelect']
export const BFormSelectOption: typeof import("bootstrap-vue-next/components/BFormSelect")['BFormSelectOption']
export const BFormSelectOptionGroup: typeof import("bootstrap-vue-next/components/BFormSelect")['BFormSelectOptionGroup']
export const BFormSpinbutton: typeof import("bootstrap-vue-next/components/BFormSpinbutton")['BFormSpinbutton']
export const BFormTag: typeof import("bootstrap-vue-next/components/BFormTags")['BFormTag']
export const BFormTags: typeof import("bootstrap-vue-next/components/BFormTags")['BFormTags']
export const BFormText: typeof import("bootstrap-vue-next/components/BForm")['BFormText']
export const BFormTextarea: typeof import("bootstrap-vue-next/components/BFormTextarea")['BFormTextarea']
export const BFormValidFeedback: typeof import("bootstrap-vue-next/components/BForm")['BFormValidFeedback']
export const BImg: typeof import("bootstrap-vue-next/components/BImg")['BImg']
export const BInput: typeof import("bootstrap-vue-next/components/BFormInput")['BInput']
export const BInputGroup: typeof import("bootstrap-vue-next/components/BInputGroup")['BInputGroup']
export const BInputGroupText: typeof import("bootstrap-vue-next/components/BInputGroup")['BInputGroupText']
export const BListGroup: typeof import("bootstrap-vue-next/components/BListGroup")['BListGroup']
export const BListGroupItem: typeof import("bootstrap-vue-next/components/BListGroup")['BListGroupItem']
export const BModal: typeof import("bootstrap-vue-next/components/BModal")['BModal']
export const BModalOrchestrator: typeof import("bootstrap-vue-next/components/BModal")['BModalOrchestrator']
export const BNav: typeof import("bootstrap-vue-next/components/BNav")['BNav']
export const BNavForm: typeof import("bootstrap-vue-next/components/BNav")['BNavForm']
export const BNavItem: typeof import("bootstrap-vue-next/components/BNav")['BNavItem']
export const BNavItemDropdown: typeof import("bootstrap-vue-next/components/BNav")['BNavItemDropdown']
export const BNavText: typeof import("bootstrap-vue-next/components/BNav")['BNavText']
export const BNavbar: typeof import("bootstrap-vue-next/components/BNavbar")['BNavbar']
export const BNavbarBrand: typeof import("bootstrap-vue-next/components/BNavbar")['BNavbarBrand']
export const BNavbarNav: typeof import("bootstrap-vue-next/components/BNavbar")['BNavbarNav']
export const BNavbarToggle: typeof import("bootstrap-vue-next/components/BNavbar")['BNavbarToggle']
export const BOffcanvas: typeof import("bootstrap-vue-next/components/BOffcanvas")['BOffcanvas']
export const BOverlay: typeof import("bootstrap-vue-next/components/BOverlay")['BOverlay']
export const BPagination: typeof import("bootstrap-vue-next/components/BPagination")['BPagination']
export const BPlaceholder: typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholder']
export const BPlaceholderButton: typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholderButton']
export const BPlaceholderCard: typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholderCard']
export const BPlaceholderTable: typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholderTable']
export const BPlaceholderWrapper: typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholderWrapper']
export const BPopover: typeof import("bootstrap-vue-next/components/BPopover")['BPopover']
export const BProgress: typeof import("bootstrap-vue-next/components/BProgress")['BProgress']
export const BRow: typeof import("bootstrap-vue-next/components/BContainer")['BRow']
export const BSpinner: typeof import("bootstrap-vue-next/components/BSpinner")['BSpinner']
export const BTab: typeof import("bootstrap-vue-next/components/BTabs")['BTab']
export const BTabs: typeof import("bootstrap-vue-next/components/BTabs")['BTabs']
export const BToast: typeof import("bootstrap-vue-next/components/BToast")['BToast']
export const BToastOrchestrator: typeof import("bootstrap-vue-next/components/BToast")['BToastOrchestrator']
export const BTooltip: typeof import("bootstrap-vue-next/components/BTooltip")['BTooltip']
export const BLink: typeof import("bootstrap-vue-next/components/BLink")['BLink']
export const BProgressBar: typeof import("bootstrap-vue-next/components/BProgress")['BProgressBar']
export const BTableSimple: typeof import("bootstrap-vue-next/components/BTable")['BTableSimple']
export const BTableLite: typeof import("bootstrap-vue-next/components/BTable")['BTableLite']
export const BTable: typeof import("bootstrap-vue-next/components/BTable")['BTable']
export const BTbody: typeof import("bootstrap-vue-next/components/BTable")['BTbody']
export const BTd: typeof import("bootstrap-vue-next/components/BTable")['BTd']
export const BTh: typeof import("bootstrap-vue-next/components/BTable")['BTh']
export const BThead: typeof import("bootstrap-vue-next/components/BTable")['BThead']
export const BTfoot: typeof import("bootstrap-vue-next/components/BTable")['BTfoot']
export const BTr: typeof import("bootstrap-vue-next/components/BTable")['BTr']
export const BPopoverOrchestrator: typeof import("bootstrap-vue-next/components/BPopover")['BPopoverOrchestrator']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyGameBoard: LazyComponent<typeof import("../src/components/GameBoard.vue")['default']>
export const LazyGameMenu: LazyComponent<typeof import("../src/components/GameMenu.vue")['default']>
export const LazySettingsForm: LazyComponent<typeof import("../src/components/SettingsForm.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyBAccordion: LazyComponent<typeof import("bootstrap-vue-next/components/BAccordion")['BAccordion']>
export const LazyBAccordionItem: LazyComponent<typeof import("bootstrap-vue-next/components/BAccordion")['BAccordionItem']>
export const LazyBAlert: LazyComponent<typeof import("bootstrap-vue-next/components/BAlert")['BAlert']>
export const LazyBAvatar: LazyComponent<typeof import("bootstrap-vue-next/components/BAvatar")['BAvatar']>
export const LazyBAvatarGroup: LazyComponent<typeof import("bootstrap-vue-next/components/BAvatar")['BAvatarGroup']>
export const LazyBBadge: LazyComponent<typeof import("bootstrap-vue-next/components/BBadge")['BBadge']>
export const LazyBBreadcrumb: LazyComponent<typeof import("bootstrap-vue-next/components/BBreadcrumb")['BBreadcrumb']>
export const LazyBBreadcrumbItem: LazyComponent<typeof import("bootstrap-vue-next/components/BBreadcrumb")['BBreadcrumbItem']>
export const LazyBButton: LazyComponent<typeof import("bootstrap-vue-next/components/BButton")['BButton']>
export const LazyBButtonGroup: LazyComponent<typeof import("bootstrap-vue-next/components/BButton")['BButtonGroup']>
export const LazyBButtonToolbar: LazyComponent<typeof import("bootstrap-vue-next/components/BButton")['BButtonToolbar']>
export const LazyBCloseButton: LazyComponent<typeof import("bootstrap-vue-next/components/BButton")['BCloseButton']>
export const LazyBCard: LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCard']>
export const LazyBCardBody: LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCardBody']>
export const LazyBCardFooter: LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCardFooter']>
export const LazyBCardGroup: LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCardGroup']>
export const LazyBCardHeader: LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCardHeader']>
export const LazyBCardImg: LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCardImg']>
export const LazyBCardSubtitle: LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCardSubtitle']>
export const LazyBCardText: LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCardText']>
export const LazyBCardTitle: LazyComponent<typeof import("bootstrap-vue-next/components/BCard")['BCardTitle']>
export const LazyBCarousel: LazyComponent<typeof import("bootstrap-vue-next/components/BCarousel")['BCarousel']>
export const LazyBCarouselSlide: LazyComponent<typeof import("bootstrap-vue-next/components/BCarousel")['BCarouselSlide']>
export const LazyBCol: LazyComponent<typeof import("bootstrap-vue-next/components/BContainer")['BCol']>
export const LazyBCollapse: LazyComponent<typeof import("bootstrap-vue-next/components/BCollapse")['BCollapse']>
export const LazyBContainer: LazyComponent<typeof import("bootstrap-vue-next/components/BContainer")['BContainer']>
export const LazyBDropdown: LazyComponent<typeof import("bootstrap-vue-next/components/BDropdown")['BDropdown']>
export const LazyBDropdownDivider: LazyComponent<typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownDivider']>
export const LazyBDropdownForm: LazyComponent<typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownForm']>
export const LazyBDropdownGroup: LazyComponent<typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownGroup']>
export const LazyBDropdownHeader: LazyComponent<typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownHeader']>
export const LazyBDropdownItem: LazyComponent<typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownItem']>
export const LazyBDropdownItemButton: LazyComponent<typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownItemButton']>
export const LazyBDropdownText: LazyComponent<typeof import("bootstrap-vue-next/components/BDropdown")['BDropdownText']>
export const LazyBForm: LazyComponent<typeof import("bootstrap-vue-next/components/BForm")['BForm']>
export const LazyBFormCheckbox: LazyComponent<typeof import("bootstrap-vue-next/components/BFormCheckbox")['BFormCheckbox']>
export const LazyBFormCheckboxGroup: LazyComponent<typeof import("bootstrap-vue-next/components/BFormCheckbox")['BFormCheckboxGroup']>
export const LazyBFormDatalist: LazyComponent<typeof import("bootstrap-vue-next/components/BForm")['BFormDatalist']>
export const LazyBFormFile: LazyComponent<typeof import("bootstrap-vue-next/components/BFormFile")['BFormFile']>
export const LazyBFormFloatingLabel: LazyComponent<typeof import("bootstrap-vue-next/components/BForm")['BFormFloatingLabel']>
export const LazyBFormGroup: LazyComponent<typeof import("bootstrap-vue-next/components/BFormGroup")['BFormGroup']>
export const LazyBFormInput: LazyComponent<typeof import("bootstrap-vue-next/components/BFormInput")['BFormInput']>
export const LazyBFormInvalidFeedback: LazyComponent<typeof import("bootstrap-vue-next/components/BForm")['BFormInvalidFeedback']>
export const LazyBFormRadio: LazyComponent<typeof import("bootstrap-vue-next/components/BFormRadio")['BFormRadio']>
export const LazyBFormRadioGroup: LazyComponent<typeof import("bootstrap-vue-next/components/BFormRadio")['BFormRadioGroup']>
export const LazyBFormRow: LazyComponent<typeof import("bootstrap-vue-next/components/BForm")['BFormRow']>
export const LazyBFormSelect: LazyComponent<typeof import("bootstrap-vue-next/components/BFormSelect")['BFormSelect']>
export const LazyBFormSelectOption: LazyComponent<typeof import("bootstrap-vue-next/components/BFormSelect")['BFormSelectOption']>
export const LazyBFormSelectOptionGroup: LazyComponent<typeof import("bootstrap-vue-next/components/BFormSelect")['BFormSelectOptionGroup']>
export const LazyBFormSpinbutton: LazyComponent<typeof import("bootstrap-vue-next/components/BFormSpinbutton")['BFormSpinbutton']>
export const LazyBFormTag: LazyComponent<typeof import("bootstrap-vue-next/components/BFormTags")['BFormTag']>
export const LazyBFormTags: LazyComponent<typeof import("bootstrap-vue-next/components/BFormTags")['BFormTags']>
export const LazyBFormText: LazyComponent<typeof import("bootstrap-vue-next/components/BForm")['BFormText']>
export const LazyBFormTextarea: LazyComponent<typeof import("bootstrap-vue-next/components/BFormTextarea")['BFormTextarea']>
export const LazyBFormValidFeedback: LazyComponent<typeof import("bootstrap-vue-next/components/BForm")['BFormValidFeedback']>
export const LazyBImg: LazyComponent<typeof import("bootstrap-vue-next/components/BImg")['BImg']>
export const LazyBInput: LazyComponent<typeof import("bootstrap-vue-next/components/BFormInput")['BInput']>
export const LazyBInputGroup: LazyComponent<typeof import("bootstrap-vue-next/components/BInputGroup")['BInputGroup']>
export const LazyBInputGroupText: LazyComponent<typeof import("bootstrap-vue-next/components/BInputGroup")['BInputGroupText']>
export const LazyBListGroup: LazyComponent<typeof import("bootstrap-vue-next/components/BListGroup")['BListGroup']>
export const LazyBListGroupItem: LazyComponent<typeof import("bootstrap-vue-next/components/BListGroup")['BListGroupItem']>
export const LazyBModal: LazyComponent<typeof import("bootstrap-vue-next/components/BModal")['BModal']>
export const LazyBModalOrchestrator: LazyComponent<typeof import("bootstrap-vue-next/components/BModal")['BModalOrchestrator']>
export const LazyBNav: LazyComponent<typeof import("bootstrap-vue-next/components/BNav")['BNav']>
export const LazyBNavForm: LazyComponent<typeof import("bootstrap-vue-next/components/BNav")['BNavForm']>
export const LazyBNavItem: LazyComponent<typeof import("bootstrap-vue-next/components/BNav")['BNavItem']>
export const LazyBNavItemDropdown: LazyComponent<typeof import("bootstrap-vue-next/components/BNav")['BNavItemDropdown']>
export const LazyBNavText: LazyComponent<typeof import("bootstrap-vue-next/components/BNav")['BNavText']>
export const LazyBNavbar: LazyComponent<typeof import("bootstrap-vue-next/components/BNavbar")['BNavbar']>
export const LazyBNavbarBrand: LazyComponent<typeof import("bootstrap-vue-next/components/BNavbar")['BNavbarBrand']>
export const LazyBNavbarNav: LazyComponent<typeof import("bootstrap-vue-next/components/BNavbar")['BNavbarNav']>
export const LazyBNavbarToggle: LazyComponent<typeof import("bootstrap-vue-next/components/BNavbar")['BNavbarToggle']>
export const LazyBOffcanvas: LazyComponent<typeof import("bootstrap-vue-next/components/BOffcanvas")['BOffcanvas']>
export const LazyBOverlay: LazyComponent<typeof import("bootstrap-vue-next/components/BOverlay")['BOverlay']>
export const LazyBPagination: LazyComponent<typeof import("bootstrap-vue-next/components/BPagination")['BPagination']>
export const LazyBPlaceholder: LazyComponent<typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholder']>
export const LazyBPlaceholderButton: LazyComponent<typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholderButton']>
export const LazyBPlaceholderCard: LazyComponent<typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholderCard']>
export const LazyBPlaceholderTable: LazyComponent<typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholderTable']>
export const LazyBPlaceholderWrapper: LazyComponent<typeof import("bootstrap-vue-next/components/BPlaceholder")['BPlaceholderWrapper']>
export const LazyBPopover: LazyComponent<typeof import("bootstrap-vue-next/components/BPopover")['BPopover']>
export const LazyBProgress: LazyComponent<typeof import("bootstrap-vue-next/components/BProgress")['BProgress']>
export const LazyBRow: LazyComponent<typeof import("bootstrap-vue-next/components/BContainer")['BRow']>
export const LazyBSpinner: LazyComponent<typeof import("bootstrap-vue-next/components/BSpinner")['BSpinner']>
export const LazyBTab: LazyComponent<typeof import("bootstrap-vue-next/components/BTabs")['BTab']>
export const LazyBTabs: LazyComponent<typeof import("bootstrap-vue-next/components/BTabs")['BTabs']>
export const LazyBToast: LazyComponent<typeof import("bootstrap-vue-next/components/BToast")['BToast']>
export const LazyBToastOrchestrator: LazyComponent<typeof import("bootstrap-vue-next/components/BToast")['BToastOrchestrator']>
export const LazyBTooltip: LazyComponent<typeof import("bootstrap-vue-next/components/BTooltip")['BTooltip']>
export const LazyBLink: LazyComponent<typeof import("bootstrap-vue-next/components/BLink")['BLink']>
export const LazyBProgressBar: LazyComponent<typeof import("bootstrap-vue-next/components/BProgress")['BProgressBar']>
export const LazyBTableSimple: LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BTableSimple']>
export const LazyBTableLite: LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BTableLite']>
export const LazyBTable: LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BTable']>
export const LazyBTbody: LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BTbody']>
export const LazyBTd: LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BTd']>
export const LazyBTh: LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BTh']>
export const LazyBThead: LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BThead']>
export const LazyBTfoot: LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BTfoot']>
export const LazyBTr: LazyComponent<typeof import("bootstrap-vue-next/components/BTable")['BTr']>
export const LazyBPopoverOrchestrator: LazyComponent<typeof import("bootstrap-vue-next/components/BPopover")['BPopoverOrchestrator']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
