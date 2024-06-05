import { StyleSheet, Image, Platform } from 'react-native';
import CommonPageLayout from '@/components/layouts/CommonPageLayout';
import BooksPage from '@/components/pages/BooksPage/BooksPage';

export default function Books() {
  return (
    <CommonPageLayout>
      <BooksPage/>
    </CommonPageLayout>
  );
}
