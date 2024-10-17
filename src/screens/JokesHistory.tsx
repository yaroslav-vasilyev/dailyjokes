const TodayJokesScreen = () => {
  const dispatch = useDispatch();
  
  // Получаем шутки из состояния Redux
  const jokesHistory = useSelector((state) => state.jokes.jokesHistory);
  const joke = jokesHistory[0]; // Используем первую шутку в массиве

  useEffect(() => {
    // Фетчим шутку при монтировании компонента
    dispatch(fetchJoke());
  }, [dispatch]);

  return (
    <View>
      <Text>Today's Jokes</Text>
      {joke ? (
        <Text>{joke.title}</Text> // Отображаем шутку
      ) : (
        <Text>Loading...</Text> // Показываем индикатор загрузки, пока шутка не будет загружена
      )}
      <Button title="Fetch Another Joke" onPress={() => dispatch(fetchJoke())} />
    </View>
  );
};

export default TodayJokesScreen;
