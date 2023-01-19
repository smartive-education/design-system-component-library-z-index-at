# mumble

Component library for a Twitter clone project for CAS Advanced Frontend Engineering 2023

The components encapsulate only limited logic, which according to our judgement should be the responsibility of the given component: 
For example: 
- validation by password or email input fields
- deletion or type change by password or email input fields
- validation by file upload input
- open/close by modals
- increase/decrease comment/like count, copy to clipboard by Interactions

Validation logic ist tested with jest.
# Icons

- To use the built in icons copy the icons.svg sprite file from "node_modules\@smartive-education\design-system-component-z-index/dist" to your assets folder.
- To use your own icons create/extend the icons.svg file
- The icon component uses the the symbol ids in the icons.svg file to load the required icon.

# Develop

## Install

- npm i

## Storybook

- npm run storybook

There are basic components which are highly customizable and used to create the more complex Compositions.
Components expose their props as controls in storybook. By adjusting these controls you may try and test the different variations of a single component. 
Template components are only for presentation purposes and are also not exported out of the library.
## Build

- npm run build

## Test

- npm run test

# Tech stack

**UI:**

- React
- Storybook
- Tailwind

**Test:**

- Jest

**Pipeline**

- Github workflows

**Deploy**

- Github pages
