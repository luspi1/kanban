import { type FC } from 'react'
import { Container } from 'src/UI/Container'
import { Helmet } from 'react-helmet-async'
import { useGetColumnsQuery } from 'src/store/tasks/tasks.api'
import { TitleColumns } from 'src/components/title-columns/title-columns'

export const HomePage: FC = () => {
	const { data: columns, isError: columnsError } = useGetColumnsQuery(null)

	return (
		<Container className='index-page' margin='20px auto 35px auto'>
			<Helmet>
				<title>Канбан</title>
			</Helmet>
			{columnsError ? (
				<h2>Ошибка получения названия колонок</h2>
			) : (
				<TitleColumns columns={columns} />
			)}
		</Container>
	)
}
