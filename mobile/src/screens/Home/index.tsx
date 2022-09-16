import React from "react";
import { View, Image, FlatList } from "react-native";
import { GAMES } from "../../utils/games";
import { styles } from "./styles";
import LogoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { GamesCard } from "../../components/GamesCard";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={LogoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o jogo que deseja jogar..."
      />
      <FlatList
        data={GAMES}
        renderItem={({ item }) => <GamesCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
