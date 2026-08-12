import { getNewsList } from '@/app/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';

// Next.jsの制約によりrevalidateはリテラル値のみ許可（import定数は不可）。
// microCMSでニュースを更新してから最大86400秒(1日)以内に本番へ自動反映される
export const revalidate = 86400;

export default async function Page() {
  const data = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });
  return (
    <>
      <NewsList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath="/news" />
    </>
  );
}
