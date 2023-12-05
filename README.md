Project 3 - MERN Stack App

Brainstorm:
- Possible ideas:
  1: Lifestyle/productivity tracker
  2: Sports app 
    - Keeping track of locations nearby where to do sports
    - Map of all sports-related facilities
    - Finding a fitness buddy to train with
      - Personal info, reviews, location, preferences
  3: Deliveroo for artists
    - Instead of ordering food, you order local artists/bands

MVP:
- Users perspective:
  - Find local artists to perform at your home or specified venue
    - Small private events as an example
  - Filtering function (decide what type of performance: music, theatre, improv)
  - Booking function
  - Customization, random suggestion
- Artists perspective:
  - Artists can register with the app so that they can be booked for a performance
  - Profile with details about themselves, type of performance, availability, fees
  - Set up a mutual agreement (both parties agree to the performance)

Models:
- User model --> CR 
  - name:
  - last name:
  - email:
  - password:
  - location:
    - address:
    - type of location: 
    - space (square meters):
    - performance ready?: boolean
  - reviews from artists who performed for this user previously (protected; only artists can see this) [array of strings]]

- Artist model: - CR
  - artist name: String
  - type of performance: [enum, array]
  - genre (if applicable):
  - location:
  - performances available: [enum, array]
  - about
    - short biography:
    - examples of previous work (showreel):
    - reviews

- Performance model: - CRUD
  - title:
  - date: Date (also includes time)
  - location:
    - deliver an artist or not:
  - artist model:
  - reviews:
  - fee: [enum, range]

App pages:
- Home page:
  - Pop-up to show choices; when you click on one, you get redirected to the relevant list
  - List of artists (nearby)
  - Filters
- Artist and Performance page:
  - Artist details
  - Showreel
  - Fees
  - Performances/services available
  - If they can deliver or not
  - Bonus: reviews
  - Contact details
  - Below:
    - Booking capabilities
- Edit/delete performance page:
  - Editing and delete function
- User Profile Page:
  - User details
  - Bonus: reviews that only artists can see
  - Recommendations
- Favourites Page:
  - Wishlist/shortlist
- Login page:
  - Form with email and password
- Sign up page:
  - Form with more details (as mentioned in the user model)

Timeline:
 - Wednesday: Backend
 - Thursday: Backend
 - Friday: Frontend
 - Monday: Frontend
 - MVP Deadline: End of day Monday 

## Milestones

### Milestone 1
[ ] Initial project setup on GitHub
    [ ] Creating our backend using ironlauncher
        npx  --yes  ironlauncher@latest  our-cool-project-backend   --auth   --json
    [ ] Creating our frontend using vite
        npm  --yes  create  vite@latest  our-cool-project-frontend -- --template react
    [ ] Uploading to github
    [ ] Use mongoose to connect to database
    [ ] Implement CORS

### Milestone 2 
[ ] Creating the schemas/models on backend 
    [ ] User schema
    [ ] Artist schema
    [ ] Performance schema 
[ ] Creating the artist routes
    [ ] GET api/artists
    [ ] GET api/artists/:artistId
    [ ] POST api/artists
[ ] Creating the user routes
    [ ] GET api/user/:userId
[ ] Creating the performance routes
    [ ] GET api/performances
    [ ] GET api/performances/:performanceId
    [ ] GET api/performances/:performanceId/:artistId
    [ ] POST api/performances
    [ ] PUT api/performances/:performanceId
    [ ] DELETE api/performances/:performanceId
[ ] Test with Postman

### Milestone 3
[ ] Authentication routes
    [ ] POST auth/signup
    [ ] POST auth/login
    [ ] GET auth/verify
[ ] If not already present: Error handling and other relevant middleware
[ ] Validation middleware
[ ] Establish protected routes (isAuthenticated)
[ ] Test with Postman

### Milestone 4
[ ] Browser Router import
    [ ] Wrap around <App /> component on main.jsx
[ ] Create a .env file and include backend URL
[ ] Create routes for the different pages
    [ ] /homepage
    [ ] /artistpage
    [ ] /performancepage
    [ ] /userpage
    [ ] /login
    [ ] /signup

### Milestone 5
[ ] Homepage
    [ ] GET request for list of artists
    [ ] Component for a pop-up banner that asks your preference in the beginning 
[ ] Artist page
    [ ] GET request display artist details
[ ] Performance page
    [ ] GET request to display performance details
    [ ] GET request to display artist details (small link/small bit of information)
    [ ] Component to book the specific performance 
[ ] Edit/delete performance page
    [ ] PUT and Delete Request
[ ] User page 
    [ ] GET request to display user dtails
[ ] Favourites page
    [ ] TBD
[ ] Sign up page
    [ ] Creating a form to input information
    [ ] POST Request
[ ] Log in page
    [ ] Creating a form to input information
    [ ] POST Request 

### Milestone 6
[ ] Implement navigational functionalities
    [ ] Navbar (include access to homepage, user page, favourites page, sign up and login)
    [ ] Footer
[ ] Styling with CSS
[ ] Responsive

## Bonuses
[ ] Filters for homepage
[ ] Reviews
[ ] Suggestions/random pick
[ ] Calendar in the booking component
[ ] Map component - meeting points/suggestions for performance places

## Minor fixes