import React, { useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme';
import MissionCard, { Mission } from '../components/MissionCard';
import { usePlayerStore, usePlayerLevel } from '../store/useStore';

const sampleMissions: Mission[] = [
  { id: 'm1', title: 'Main Quest: Learn Chapter 5 - Physics', subject: 'Physics', xp: 45, delta: 30 },
  { id: 'm2', title: 'Progress Quest: 20 Math Problems', subject: 'Mathematics', xp: 30, delta: 20 },
  { id: 'm3', title: 'Revision Quest: Flashcards - Biology', subject: 'Biology', xp: 25, delta: 15 }
];

export default function HomeScreen() {
  const theme = useTheme();
  const player = usePlayerStore(s => ({ name: s.name, xp: s.xp }));
  const level = usePlayerLevel();

  const renderMission = useCallback(({ item }: { item: Mission }) => {
    return <MissionCard mission={item} />;
  }, []);

  const keyExtractor = useCallback((item: Mission) => item.id, []);

  return (
    <FlatList
      data={sampleMissions}
      keyExtractor={keyExtractor}
      renderItem={renderMission}
      contentContainerStyle={[styles.container, { backgroundColor: theme.colors.background }]}
      ListHeaderComponent={() => (
        <View style={styles.header}>
          <View>
            <Text style={theme.styles.headerTitle}>Good Morning, {player.name}</Text>
            <Text style={{ color: theme.colors.textSecondary, marginTop: 4 }}>{`Lv. ${level.level} • ${Math.round(level.progress*100)}% to next`}</Text>
          </View>
          <View style={styles.levelCard}>
            <Text style={{ color: theme.colors.gold, fontWeight: '700', fontSize: 18 }}>{`Lv ${level.level}`}</Text>
            <Text style={{ color: theme.colors.textPrimary, marginTop: 4 }}>{`${player.xp} XP`}</Text>
          </View>
        </View>
      )}
      ListFooterComponent={() => (
        <View style={styles.footerSection}>
          <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary }]}>Quick Actions</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={[styles.actionButton, { borderColor: theme.colors.border }]} onPress={() => {}}>
              <Text style={{ color: theme.colors.primary }}>Start Focus</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, { borderColor: theme.colors.border, marginLeft: 8 }]} onPress={() => {}}>
              <Text style={{ color: theme.colors.primary }}>Add Quest</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 40 },
  header: { padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  levelCard: { backgroundColor: '#0F2438', padding: 12, borderRadius: 12, alignItems: 'center' },
  footerSection: { padding: 16 },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 12 },
  actionButton: { padding: 12, borderRadius: 10, borderWidth: 1 }
});
