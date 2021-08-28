import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useLayoutEffect,
} from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import formatValue from '../../utils/formatValue';

import api from '../../services/api';

import {
  Container,
  Header,
  ScrollContainer,
  FoodsContainer,
  Food,
  FoodImageContainer,
  FoodContent,
  FoodTitle,
  FoodDescription,
  FoodPricing,
  AdditionalsContainer,
  Title,
  TotalContainer,
  AdittionalItem,
  AdittionalItemText,
  AdittionalQuantity,
  PriceButtonContainer,
  TotalPrice,
  QuantityContainer,
  FinishOrderButton,
  ButtonText,
  IconContainer,
} from './styles';

interface Params {
  id: number;
}

interface Extra {
  id: number;
  name: string;
  value: number;
  quantity: number;
}

interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  formattedPrice: string;
  extras: Extra[];
}

const FoodDetails: React.FC = () => {
  const [food, setFood] = useState({} as Food);
  const [extras, setExtras] = useState<Extra[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [foodQuantity, setFoodQuantity] = useState(1);

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadFood(): Promise<void> {
      const { id } = routeParams;

      const { data: foodData } = await api.get<Food>(`/foods/${id}`);

      const { extras: foodExtras } = foodData;

      setFood({ ...foodData, formattedPrice: formatValue(foodData.price) });
      setExtras(foodExtras.map(foodExtra => ({ ...foodExtra, quantity: 0 })));

      try {
        const isFoodFavorite = await api.get(`/favorites/${id}`);
        setIsFavorite(!!isFoodFavorite);
      } catch (err) {
        setIsFavorite(false);
      }
    }

    loadFood();
  }, [routeParams]);

  function handleIncrementExtra(id: number): void {
    setExtras(foodExtras =>
      foodExtras.map(({ quantity, ...extra }) => {
        let updatedQuantity = quantity;
        if (extra.id === id) {
          updatedQuantity += 1;
        }
        return { quantity: updatedQuantity, ...extra };
      }),
    );
  }

  function handleDecrementExtra(id: number): void {
    setExtras(foodExtras =>
      foodExtras.map(({ quantity, ...extra }) => {
        let updatedQuantity = quantity;
        if (extra.id === id && updatedQuantity > 0) {
          updatedQuantity -= 1;
        }
        return { quantity: updatedQuantity, ...extra };
      }),
    );
  }

  function handleIncrementFood(): void {
    setFoodQuantity(quantity => quantity + 1);
  }

  function handleDecrementFood(): void {
    setFoodQuantity(quantity => (quantity === 1 ? 1 : quantity - 1));
  }

  const toggleFavorite = useCallback(() => {
    const { extras: foodExtras, formattedPrice, ...foodData } = food;

    if (isFavorite) {
      api.delete(`/favorites/${foodData.id}`);
    } else {
      api.post(`/favorites`, foodData);
    }

    setIsFavorite(state => !state);
  }, [isFavorite, food]);

  const cartTotal = useMemo(() => {
    const extrasPrice = extras.reduce(
      (total, extra) => total + extra.value * extra.quantity,
      0,
    );

    return (food.price + extrasPrice) * foodQuantity;
  }, [extras, food, foodQuantity]);

  const formattedCartTotal = useMemo(() => {
    const value = formatValue(cartTotal);
    return value;
  }, [cartTotal]);

  async function handleFinishOrder(): Promise<void> {
    const { id, formattedPrice, extras: foodExtras, price, ...foodData } = food;

    await api.post('/orders', {
      product_id: id,
      price: cartTotal,
      extras,
      ...foodData,
    });

    navigation.reset({
      routes: [{ name: 'MainBottom' }],
      index: 0,
    });
  }

  // Calculate the correct icon name
  const favoriteIconName = useMemo(
    () => (isFavorite ? 'favorite' : 'favorite-border'),
    [isFavorite],
  );

  useLayoutEffect(() => {
    // Add the favorite icon on the right of the header bar
    navigation.setOptions({
      headerRight: () => (
        <MaterialIcon
          name={favoriteIconName}
          size={24}
          color="#FFB84D"
          onPress={() => toggleFavorite()}
        />
      ),
    });
  }, [navigation, favoriteIconName, toggleFavorite]);

  return (
    <Container>
      <Header />

      <ScrollContainer>
        <FoodsContainer>
          <Food>
            <FoodImageContainer>
              <Image
                style={{ width: 327, height: 183 }}
                source={{
                  uri: food.image_url,
                }}
              />
            </FoodImageContainer>
            <FoodContent>
              <FoodTitle>{food.name}</FoodTitle>
              <FoodDescription>{food.description}</FoodDescription>
              <FoodPricing>{food.formattedPrice}</FoodPricing>
            </FoodContent>
          </Food>
        </FoodsContainer>
        <AdditionalsContainer>
          <Title>Adicionais</Title>
          {extras.map(extra => (
            <AdittionalItem key={extra.id}>
              <AdittionalItemText>{extra.name}</AdittionalItemText>
              <AdittionalQuantity>
                <Icon
                  size={15}
                  color="#6C6C80"
                  name="minus"
                  onPress={() => handleDecrementExtra(extra.id)}
                  testID={`decrement-extra-${extra.id}`}
                />
                <AdittionalItemText testID={`extra-quantity-${extra.id}`}>
                  {extra.quantity}
                </AdittionalItemText>
                <Icon
                  size={15}
                  color="#6C6C80"
                  name="plus"
                  onPress={() => handleIncrementExtra(extra.id)}
                  testID={`increment-extra-${extra.id}`}
                />
              </AdittionalQuantity>
            </AdittionalItem>
          ))}
        </AdditionalsContainer>
        <TotalContainer>
          <Title>Total do pedido</Title>
          <PriceButtonContainer>
            <TotalPrice testID="cart-total">{formattedCartTotal}</TotalPrice>
            <QuantityContainer>
              <Icon
                size={15}
                color="#6C6C80"
                name="minus"
                onPress={handleDecrementFood}
                testID="decrement-food"
              />
              <AdittionalItemText testID="food-quantity">
                {foodQuantity}
              </AdittionalItemText>
              <Icon
                size={15}
                color="#6C6C80"
                name="plus"
                onPress={handleIncrementFood}
                testID="increment-food"
              />
            </QuantityContainer>
          </PriceButtonContainer>

          <FinishOrderButton onPress={() => handleFinishOrder()}>
            <ButtonText>Confirmar pedido</ButtonText>
            <IconContainer>
              <Icon name="check-square" size={24} color="#fff" />
            </IconContainer>
          </FinishOrderButton>
        </TotalContainer>
      </ScrollContainer>
    </Container>
  );
};

export default FoodDetails;
