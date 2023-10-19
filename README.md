# Tasks
- [x] Fetch the `UserAccount` data from the backend and display it.
- [x] The first element to be displayed is the current user email.
- [x] The second element to be displayed is information about how many `Profile`, `PaymentMethod`,
`Person`, `Address` and `Meter` exist within the `UserAccount`.
- [x] The third element to be displayed is list with the name of each profile present in the account: `Profile` (name)
- [x] While waiting for the backend response, display any sort of loader to show that data is currently being fetched
- [x] Implement a CTA next to each profile name.
- [x] Clicking on that CTA fires a POST request to remove the profile. Just like when fetching the data, display any
sort of loader while the deletion request is ongoing. When the request successfully finishes, the displayed
data immediately reflects the success of deletion.
- [x] Each profile name should be a link that navigates to a page that shows more details of it:
- [x] in this page, there should be a lists of persons, payment methods, and addresses, displaying preview
information of these in their respective lists:
- [x] List of `Person`: salutation and lastName
- [x] List of `PaymentMethod`: name
- [x] List of `Address`: name, street and houseNumber
- [x] Each element of the three lists mentioned above should also go to their own specific details page. Each page 
should display the following data:
- [x] Details page of `Person`:
- [x] salutation, firstName and lastName (add an indicator if isPrimary is true for this person)
- [x] occupation
- [x] maritalStatus
- [x] Details page of `PaymentMethod`:
- [x] name (add an indicator if isPrimary is true for this payment method)
- [x] iban
- [x] bic
- [x] Details page of `Address`:
- [x] name (add an indicator if isPrimary is true for this address)
- [x] postalCode and city
- [x] street and houseNumber
- [x] number of meters belonging to this address

# Bonus tasks
- [x] Create a timer that measures seconds and milisseconds taken to retrieve the initial data, in the format, like so:
- [x] Any kind of styling is definitely considered :)

# Extras tasks (overengineer)
- [x] Add react-router-dom to manage the routes
- [x] Create a custom route to Profile Details page `path="/profile/:profileId"`
- [x] Create a custom route to Person Details page `path="/profile/:profileId/person/:personId"`
- [x] Create a custom route to PaymentMethod Details page `path="/profile/:profileId/payment-method/:paymentId"`
- [x] Create a custom route to Address Details Page `path="profile/:profileId/address/:addressId"`
- [x] Add Redux Tool Kit to handle with state
- [x] Create a UserAccount state
- [x] Add Redux Tool Kit Query to handle fetching data from api
- [x] Added the business logic to the `domain/entity/user-account`
- [x] user-account entity has 100% test coverage
- [x] Every page will use redux data even when is routing
- [x] Refresh page works with any route 
- [x] All css was created usgin css-in-js `(styled-components)`
- [x] Responsivel layout
- [x] Created a custom hook to manage the fetching timer
= [x] Created a custom hook to fetch data when doesn't exist in redux store

# Getting started
1) Navigate to the `backend` folder and follow its readme instructions
2) Navigate to the `frontend` folder and follow its instructions

# Technologies
### Frontend
- `TypeScript (5.1.3)`
- `React (18.2.0)`
- `Vite (4.3.9)`
- `Redux Tool Kit (1.9.7)`
  - https://github.com/reduxjs/redux-toolkit
  - react-redux
  - redux tool kit query
- `styled-components (6.1.0)`
- `react-router-dom (6.17.0)`
- `jest (29.7.0)`

### Backend
- `TypeScript (5.1.3)`
  - Superset of JavaScript for type safety
  - https://www.typescriptlang.org
- `Prisma (4.16.2)` and `@prisma/client (4.16.2)`
  - Type-safe query builder for Node.js & TypeScript
  - https://www.prisma.io/
- `Fastify (4.18.0)`
  - Web framework
  - https://fastify.dev/
