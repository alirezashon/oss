/** @format */

import Accordion from '../../components/formcomponents/Accordion';
import CalenderPicker from '../../components/formcomponents/CalenderPicker';
import CasecadeSelect from '../../components/formcomponents/CascadeSelect';
import CheckBox from '../../components/formcomponents/CheckBox';
import Chips from '../../components/formcomponents/Chips';
import Editor from '../../components/formcomponents/Editor';
import Input from '../../components/formcomponents/Input';
import Knob from '../../components/formcomponents/Knob';
import Slider from '../../components/formcomponents/Slider';
import Switch from '../../components/formcomponents/Switch';
import TextArea from '../../components/formcomponents/TextArea';

export default function index() {
	return (
		<>
			<div className='chart-layout'>
				<Accordion props={{ label: 'ali', content: 'pesar khale' }} />
			</div>

			<div className='chart-layout'>
				<CalenderPicker />
			</div>

			<div className='chart-layout'>
				<CasecadeSelect />
			</div>

			<div className='chart-layout'>
				<CheckBox />
			</div>

			<div className='chart-layout'>
				<Chips props={{ width: 333, name: 'alireza' }} />
			</div>

			<div className='chart-layout'>
				<Editor />
			</div>

			<div className='chart-layout'>
				<Input props={{ width: 222, name: 'akbari' }} />
			</div>

			<div className='chart-layout'>
				<Knob />
			</div>

			<div className='chart-layout'>
				<Slider />
			</div>

			<div className='chart-layout'>
				<Switch />
			</div>

			<div className='chart-layout'>
				<TextArea />
			</div>
		</>
	);
}



array = [0, 1, 2, 3,4]

array.map((zahra) => (

	<div>{ zahra }</div>
	
))
