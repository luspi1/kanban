import { type FC } from 'react'
import { Container } from 'src/UI/Container'
import { Helmet } from 'react-helmet-async'
import { useGetColumnsQuery, useGetTracksQuery } from 'src/store/tasks/tasks.api'
import { TitleColumns } from 'src/components/title-columns/title-columns'
import { Tracks } from 'src/components/tracks/tracks'

export const HomePage: FC = () => {
	const { data: columns, isError: columnsError } = useGetColumnsQuery(null)
	const { data: tracks, isError: tracksError } = useGetTracksQuery(null)

	return (
		<Container className='index-page' margin='20px auto 35px auto'>
			<Helmet>
				<title>Канбан</title>
			</Helmet>
			<TitleColumns columns={columns} resError={columnsError} />
			<Tracks tracks={tracks} resError={tracksError} colAmount={columns?.length} />
		</Container>
	)
}
