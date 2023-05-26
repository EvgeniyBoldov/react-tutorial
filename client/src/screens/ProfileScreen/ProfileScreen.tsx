import React, { FC } from 'react';
import { SettingsBlock } from './SettingsBlock';
import { useTranslation } from 'react-i18next';
import { Page } from '../../components/Page';
import s from './ProfileScreen.sass';

export const ProfileScreen: FC = () => {
  const { t } = useTranslation();
  return (
    <Page title={t`screens.ProfileScreen.title`}>
      <SettingsBlock className={s.block} />
    </Page>
  );
};

export default ProfileScreen;
