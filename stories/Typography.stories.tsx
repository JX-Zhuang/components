import React, { useState } from 'react';
import Typography from '../src/components/Typography';
import styles from './typography.module.scss';
export default {
  title: 'Typography',
  component: Typography
};
export const Title = () => {
  const { Title } = Typography;
  return (
    <div>
      <Title>Title</Title>
      <Title level={2}>Title</Title>
      <Title level={3}>Title</Title>
      <Title level={4}>Title</Title>
      <Title level={4} className={styles.title}>
        Title
      </Title>
    </div>
  );
};
export const Text = () => {
  const { Text } = Typography;
  return (
    <div>
      <p>defalut</p>
      <Text>
        To be, or not to be, that is a question: Whether it is nobler in the
        mind to suffer. The slings and arrows of outrageous fortune Or to take
        arms against a sea of troubles, And by opposing end them? To die: to
        sleep; No more; and by a sleep to say we end The heart-ache and the
        thousand natural shocks That flesh is heir to, 'tis a consummation
        Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream:
        ay, there's the rub! For in that sleep of death what dreams may come
        When we have shuffled off this mortal coil, Must give us pause. There 's
        the respect That makes calamity of so long life--William Shakespeare
      </Text>
      <p>small</p>
      <Text size="small">
        To be, or not to be, that is a question: Whether it is nobler in the
        mind to suffer. The slings and arrows of outrageous fortune Or to take
        arms against a sea of troubles, And by opposing end them? To die: to
        sleep; No more; and by a sleep to say we end The heart-ache and the
        thousand natural shocks That flesh is heir to, 'tis a consummation
        Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream:
        ay, there's the rub! For in that sleep of death what dreams may come
        When we have shuffled off this mortal coil, Must give us pause. There 's
        the respect That makes calamity of so long life--William Shakespeare
      </Text>
      <p>scoondary</p>
      <Text type="secondary">
        To be, or not to be, that is a question: Whether it is nobler in the
        mind to suffer. The slings and arrows of outrageous fortune Or to take
        arms against a sea of troubles, And by opposing end them? To die: to
        sleep; No more; and by a sleep to say we end The heart-ache and the
        thousand natural shocks That flesh is heir to, 'tis a consummation
        Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream:
        ay, there's the rub! For in that sleep of death what dreams may come
        When we have shuffled off this mortal coil, Must give us pause. There 's
        the respect That makes calamity of so long life--William Shakespeare
      </Text>
      <p>small secondary</p>
      <Text size="small" type="secondary">
        To be, or not to be, that is a question: Whether it is nobler in the
        mind to suffer. The slings and arrows of outrageous fortune Or to take
        arms against a sea of troubles, And by opposing end them? To die: to
        sleep; No more; and by a sleep to say we end The heart-ache and the
        thousand natural shocks That flesh is heir to, 'tis a consummation
        Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream:
        ay, there's the rub! For in that sleep of death what dreams may come
        When we have shuffled off this mortal coil, Must give us pause. There 's
        the respect That makes calamity of so long life--William Shakespeare
      </Text>
      <p>custom</p>
      <Text className={styles.text}>
        To be, or not to be, that is a question: Whether it is nobler in the
        mind to suffer. The slings and arrows of outrageous fortune Or to take
        arms against a sea of troubles, And by opposing end them? To die: to
        sleep; No more; and by a sleep to say we end The heart-ache and the
        thousand natural shocks That flesh is heir to, 'tis a consummation
        Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream:
        ay, there's the rub! For in that sleep of death what dreams may come
        When we have shuffled off this mortal coil, Must give us pause. There 's
        the respect That makes calamity of so long life--William Shakespeare
      </Text>
    </div>
  );
};
