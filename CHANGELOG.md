## [Version 2.0 Changelog](#version-2-changelog)

Simpler API, alongside newly added and updated features (mind breaking-changes).

### Added

- Added test coverage.
- Added multiple instance support.
- Added scope field `idle`.
- Added prop `logoClass`.
- Added prop `textClass`.
- Added prop `loaderClass`.
- Added prop [`useAltLogo`](#usealtlogo-prop).
- Added prop `asyncDelay`.
  > Available from version `>= 2.3.0`.

### Updated

- Updated style with leaner CSS.
- Updated all slots to [scoped-slots](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots).
- Updated prop `version` default to: `v6.0`.
- Updated error slot to appear on all errors.
- Updated logo to comply with [Facebook guidelines](https://developers.facebook.com/docs/facebook-login/userexperience/#buttondesign).
- Updated labels to comply with [Facebook guidelines](https://developers.facebook.com/docs/facebook-login/userexperience/#buttondesign).

### Fixed

- Fixed `disabled` state when `app-id` is not provided.

### Removed

- Removed event `connect` (use `login` instead).
- Removed prop `buttonStyle` (use `style` instead).
- Removed scope field `hasError` (use `error` instead).
  > Restored in `2.3.0`.
