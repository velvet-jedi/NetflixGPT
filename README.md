# Features

-   Login

    -   login
    -   sign up
    -   form input validation
    -   redirect to /browse
    -   Browse (authenticated)
    -   useRef to optimize performance
    -   Concise error messages on logins
    -   Firebase sign in sign up user management
    -   Redux to store auth info
    -   useNavigate for redirecting
    -   useSelector
    -   Return unsubscribe() from onAuthStateChanged to clean up the Firebase listener when the component unmounts.
    -   Scalability:

        -   Redux usage
        -   Single constants file

    -   Header
    -   Modularity separation of concerns
    -   Trailer background
    -   title & description
    -   custom hooks for playing main trailer and storing movie data to redux store
    -   movie by genres suggestions tiles
    -   YouTube and TMDB apis

        -   horizontal scroll

    -   the movieSlice manages the state for movie data, including the currently playing movies and associated trailer videos. The MainBrowseContainer component retrieves the list of currently playing movies from the Redux store and uses a custom hook, useMovieTrailer, to fetch the trailer for the main movie and store it in the Redux state. The VideoBackground component then uses the trailerVideo from the Redux store to display the trailer in an iframe.

-   NetflixGPT
    -   Search Bar
    -   GoogleGenerativeAI integration to suggest Movies
    -   Firebase
    -   Authentication
    -   Fetching from TMDB
-   Memoization of the data layer

# Tech stack

-   Tailwind
-   React
-   React router
