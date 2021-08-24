import './App.css';
import Counter from './components/Counter'
import CounterState from './components/CounterState';
import CounterStateEasier from './components/CounterStateEasier';
import DogApi from './components/RandomUser';
import DogImage from './components/DogImage';
import FireworksFunc from './components/FireworksFunc';
import FireworksState from './components/FireworksState';
import Friend from './components/Friend';
import GreeterFunc from './components/GreeterFunc';
import Input from './components/Input';
import JokeApp from './components/JokeApp';
import JokeCategory from './components/JokeCategory';
import LanguageFunc from './components/LanguageFunc';
import LanguagePickerEasier from './components/LanguagePickerEasier';
import LanguagePickerState from './components/LanguagePickerState';
import Name from './components/Name';
import NameField from './components/NameField';
import NameFieldLoop from './components/NameFieldLoop';
import Pancake from './components/Pancake';
import Profile from './components/Profile';
import ProfileCard from './components/ProfileCard';
import ProfileCardLoop from './components/ProfileCardLoop';
import ProfileForm from './components/ProfileForm';
import ProfileFunc from './components/ProfileFunc';
import RandomDog from './components/RandomDog';
import RandomDogBreed from './components/RandomDogBreed';
import StarRating from './components/StarRating';
import StarRatingLoop from './components/StarRatingLoop';
import StatusFunc from './components/StatusFunc';
import StatusPickerEasier from './components/StatusPickerEasier';
import StatusPickerState from './components/StatusPickerState';
import Timestamp from './components/Timestamp'
import TimestampClock from './components/TimestampClock';
import Translator from './components/Translator';
import TranslatorForm from './components/TranslatorForm';
import RandomUser from './components/RandomUser';
import MagicEightBall from './components/MagicEightBall';
import ShoppingList from './components/ShoppingList';
import FancyText from './components/FancyText';
import AddressBook from './components/AddressBook';
// import CounterFunc from './CounterFunc';

// import Greeter from './components/Greeter'

function App() {
  // const user1 = "Tony Stark"
  // const peopleToGreet = [
  //   'Natasha',
  //   'Tony Stark',
  //   'Peter Parker',
  //   'Steve Rogers',
  //   'Bruce Banner'

  // ]
  const addresses = [
    { first: 'Bruce', last: 'Banner' },
    { first: 'Carol', last: 'Danvers' },
    { first: 'Thor', last: 'Odinsson' },
    { first: 'Natasha', last: 'Romanov' },
    { first: 'Wanda', last: 'Maximoff' },
    { first: 'Tony', last: 'Stark' },
    { first: 'Sam', last: 'Wilson' },
  ]
  const movies = [
    { id: 'tt0113243', title: 'Hackers', releaseDate: '1995-09-15', rating: 6.2 },
    { id: 'tt0244244', title: 'Swordfish', releaseDate: '2001-05-11', rating: 6.5 },
    { id: 'tt0086567', title: 'WarGames', releaseDate: '1983-06-03', rating: 7.1 },
    { id: 'tt0133093', title: 'The Matrix', releaseDate: '1999-03-24', rating: 8.7 },
    { id: 'tt0151804', title: 'Office Space', releaseDate: '1999-02-19', rating: 7.7 },
  ]
  const staffMembers = [
    {
      name: { first:'Jared', last:'Donald Dunn' },
      title: 'Head of Business Development',
    },
    {
      name: { first: 'Russ', last: 'Hanneman'},
      title: 'Founder',
    },
    {
      name: { first: 'Erlich', last: 'Bachman' },
      title: 'Chief PR Officer',
    },
    {
      name: { first: 'Richard', last: 'Hendricks' },
      title: 'President',
    },
    {
      name: { first: 'Dinesh', last: 'Chugtai' },
      title: 'Lead Engineer',
    },
    {
      name: { first: 'Bertram', last: 'Gilfoyle' },
      title: 'Systems Architect',
    }
]
  
  return (
    <div className="App">
      {/* <Counter />
      <Timestamp />
      <TimestampClock /> */}
      {/* <Translator initialText="hello world!" /> */}
      <Friend friendName="Bob Belcher"/>
      <NameField firstName="Steve" lastName="Rogers"/>
      <StarRating rating={3} />
      <ProfileCard name="Tony Stark" title="Owner Operator" />
      {
        addresses.map((name, index) => {
          return (
            <NameFieldLoop key={index} firstName={name.first} lastName={name.last} />

          )
        })
      }
      <h2>Movies</h2>
      {movies.map((movie, index) => {
        return (
          <div key={movie.id}>
            <p>Title: {movie.title}</p>
            <p>Release Date: {movie.releaseDate.slice(0, 4)}</p>
            <p> <StarRatingLoop rating={Math.round(movie.rating / 2)}/></p>
          </div>
          )
        })}
        {/* <StarRatingLoop rating={4}/> */}
        <h2>Staff</h2>
        {staffMembers.map((member, index) => {
          return(
            <ProfileCardLoop key={index} name={member.name.first + " " + member.name.last} title={member.title} />
          )
        })}
        <ProfileCardLoop name="Steve Rogers" title="Owner Operator" />
        <FireworksState />
        <CounterState />
        <StatusPickerState />
        <LanguagePickerState />
        <StatusPickerEasier />
        <LanguagePickerEasier />
        <CounterStateEasier />
        <TranslatorForm />
        <ProfileForm />
        <Input />
        <Pancake />
        <RandomDog />
        <JokeApp />
        <RandomDogBreed />
        <JokeCategory />
        <GreeterFunc name="Natasha" />
        {/* <Name /> */}
        <ProfileFunc name="Steve Rogers" title="Owner Operator" />
        {/* <CounterFunc /> */}
        <StatusFunc />
        <FireworksFunc />
        <LanguageFunc />
        <DogImage />
        <RandomUser />
        <MagicEightBall />
        <ShoppingList />
        <FancyText />
        <AddressBook />

        
    </div>
  );
}

export default App; 
