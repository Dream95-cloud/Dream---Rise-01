import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme';

export type Mission = {
  id: string;
  title: string;
  subject?: string;
  xp: number;
  delta: number;
  status?: 'todo' | 'in-progress' | 'done';
};

const MissionCardInner: React.FC<{ mission: Mission }> = ({ mission }) => {
  const theme = useTheme();
  return (
    <View style={[styles.card, { backgroundColor: theme.colors.surface, borderColor: theme.colors.border }]}>
      <Text style={[styles.title, { color: theme.colors.textPrimary }]} numberOfLines={2} ellipsizeMode="tail">
        {mission.title}
      </Text>
      <Text style={[styles.subject, { color: theme.colors.textSecondary }]}>{mission.subject || 'General'}</Text>
      <View style={styles.row}>
        <Text style={[styles.xp, { color: theme.colors.primary }]}>{mission.xp} XP</Text>
        <Text style={[styles.delta, { color: theme.colors.gold }]}>Δ {mission.delta}</Text>
      </View>
    </View>
  );
};

const MissionCard = React.memo(MissionCardInner, (prev, next) => prev.mission.id === next.mission.id && prev.mission.xp === next.mission.xp && prev.mission.delta === next.mission.delta && prev.mission.status === next.mission.status);

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 12
  },
  title: { fontWeight: '700', fontSize: 14 },
  subject: { marginTop: 6, fontSize: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  xp: { fontWeight: '700' },
  delta: { fontWeight: '700' }
});

export default MissionCard;
