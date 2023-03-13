/** @format */
import { HiArrowCircleUp } from 'react-icons/hi'

import { useState } from 'react'
import Tree from '../../../../components/D3/tree'

const index = () => {
  const [field, setField] = useState('IMEI')
  const [props, setProps] = useState()
  const [value, setValue] = useState([359760091895140, 359760091814182, 869492053878244, 862343030750005,359760091887998])

  const searchIssues = () => {
  setProps({field: field,
				value: value,})
  }

	return (
		<>
			<div className='search-engine-input-box'>
				<form className='search-engine-input-box-values-form'>
					<div className='search-engine-value-box'>
						<div class='wrapper'>
							<div class='file-upload'>
								<input type='file' />
								<HiArrowCircleUp />
							</div>
						</div>
					</div>
					<div className='search-engine-field-box'>
						<input
							type='text'
							className='search-engine-input-box-values-text'
							placeholder='value'
						/>
						<select className='search-engine-input-field-labels'>
							<option className='search-engine-input-field-label'>IMEI</option>
							<option className='search-engine-input-field-label'>
								ASSIGNEE
							</option>
							<option className='search-engine-input-field-label'>
								APPROVAL
							</option>
							<option className='search-engine-input-field-label'>
								CREATED
							</option>
							<option className='search-engine-input-field-label'>
								REPORTER
							</option>
							<option className='search-engine-input-field-label'>IMSI</option>
						</select>
						<input
							type='text'
							className='search-engine-input-box-field-text'
							placeholder='field'
            />
            <input type='submit' value='send' onClick={searchIssues } />
					</div>
				</form>
			</div>
			<div className='search-engine-output-box h-100'>
			<Tree
			props={{
				field:field,
				value:value,
          }}
		/>
			</div>
		</>
	)
}
export default index
