/** @format */

import Accordion from '../../components/formcomponents/Accordion';
import Horizontal from '../../components/charts/Bar/Horizontal';
import Vertical from '../../components/charts/Bar/Vertical';
import MultiAxis from '../../components/charts/Bar/MultiAxis';
import Stacked from '../../components/charts/Bar/Stacked';
import Combo from '../../components/charts/Combo';
import Doughnut from '../../components/charts/Doughnut';
import LineBasic from '../../components/charts/Line/Basic';
import LineMultiAxis from '../../components/charts/Line/MultiAxis';
import LineStyle from '../../components/charts/Line/LineStyle';
import Pie from '../../components/charts/Pie';
import Polar from '../../components/charts/Polar';
import ProgressBar from '../../components/charts/ProgressBar';
import Radar from '../../components/charts/Radar';

export default function index() {
	return (
		<>
			<div className='charts-layout'>
				<div className='chart-layout'>
					<Accordion
						style={{ backgroundColor: 'red' }}
						props={{
							label: 'OSS chart',
							content:
								'a dashboard will show OSS team abilities with more details',
						}}
					/>
					<Vertical />
				</div>

				<div className='chart-layout'>
					<Accordion
						style={{ backgroundColor: 'red' }}
						props={{
							label: 'OSS chart',
							content:
								'a dashboard will show OSS team abilities with more details',
						}}
					/>
					{/* <Horizontal /> */}
				</div>

				<div className='chart-layout'>
					<Accordion
						style={{ backgroundColor: 'red' }}
						props={{
							label: 'OSS chart',
							content:
								'a dashboard will show OSS team abilities with more details',
						}}
					/>
					<MultiAxis />
				</div>

				<div className='chart-layout'>
					<Accordion
						style={{ backgroundColor: 'red' }}
						props={{
							label: 'OSS chart',
							content:
								'a dashboard will show OSS team abilities with more details',
						}}
					/>
					<Stacked />
				</div>

				<div className='chart-layout'>
					<Accordion
						style={{ backgroundColor: 'red' }}
						props={{
							label: 'OSS chart',
							content:
								'a dashboard will show OSS team abilities with more details',
						}}
					/>
					<Combo />
				</div>

				<div className='chart-layout'>
					<Accordion
						style={{ backgroundColor: 'red' }}
						props={{
							label: 'OSS chart',
							content:
								'a dashboard will show OSS team abilities with more details',
						}}
					/>
					<Doughnut />
				</div>

				<div className='chart-layout'>
					<Accordion
						style={{ backgroundColor: 'red' }}
						props={{
							label: 'OSS chart',
							content:
								'a dashboard will show OSS team abilities with more details',
						}}
					/>
					<LineBasic />
				</div>

				<div className='chart-layout'>
					<Accordion
						style={{ backgroundColor: 'red' }}
						props={{
							label: 'OSS chart',
							content:
								'a dashboard will show OSS team abilities with more details',
						}}
					/>
					<LineMultiAxis />
				</div>

				<div className='chart-layout'>
					<Accordion
						style={{ backgroundColor: 'red' }}
						props={{
							label: 'OSS chart',
							content:
								'a dashboard will show OSS team abilities with more details',
						}}
					/>
					<LineStyle />
				</div>

				<div className='chart-layout'>
					<Accordion
						style={{ backgroundColor: 'red' }}
						props={{
							label: 'OSS chart',
							content:
								'a dashboard will show OSS team abilities with more details',
						}}
					/>
					<Pie />
				</div>

				<div className='chart-layout'>
					<Accordion
						style={{ backgroundColor: 'red' }}
						props={{
							label: 'OSS chart',
							content:
								'a dashboard will show OSS team abilities with more details',
						}}
					/>
					<Polar />
				</div>

				<div className='chart-layout'>
					<Accordion
						style={{ backgroundColor: 'red' }}
						props={{
							label: 'OSS chart',
							content:
								'a dashboard will show OSS team abilities with more details',
						}}
					/>
					<ProgressBar />
				</div>

				<div className='chart-layout'>
					<Accordion
						style={{ backgroundColor: 'red' }}
						props={{
							label: 'OSS chart',
							content:
								'a dashboard will show OSS team abilities with more details',
						}}
					/>
					<Radar />
				</div>
			</div>
		</>
	);
}
