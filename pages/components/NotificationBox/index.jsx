/** @format */

import React, { useState, useEffect, useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { ProductService } from './ProductService';
import { Badge } from 'primereact/badge';

export default function index() {
	const [products, setProducts] = useState(null);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const productService = new ProductService();
	const op = useRef(null);
	const toast = useRef(null);
	const isMounted = useRef(false);

	useEffect(() => {
		if (isMounted.current && selectedProduct) {
			op.current.hide();
			toast.current.show({
				severity: 'info',
				summary: 'Product Selected',
				detail: selectedProduct.name,
				life: 3000,
			});
		}
	}, [selectedProduct]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		isMounted.current = true;
		productService.getProductsSmall().then((data) => setProducts(data));
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const formatCurrency = (value) => {
		return value.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		});
	};

	const onProductSelect = (e) => {
		setSelectedProduct(e.value);
	};

	const priceBody = (rowData) => {
		return formatCurrency(rowData.price);
	};
	return (
		<div>
			<div className='card'>
				<button
					type='button'
					onClick={(e) => op.current.toggle(e)}
					aria-haspopup
					aria-controls='overlay_panel'
					className='select-product-button mr-2 border border-white  notification-btn'>
					<i
						className='pi pi-bell mr-4 p-text-secondary p-overlay-badge'
						style={{ fontSize: '1.7rem', color: 'white' }}>
						<Badge
							value='2'
							className='bg-danger text-white'></Badge>
					</i>
				</button>
			</div>
			<Toast ref={toast} />

			<div
				className='card'
				style={{ width: 'fit-content' }}>
				<OverlayPanel
					ref={op}
					showCloseIcon
					id='overlay_panel'
					style={{ width: '450px' }}
					className='overlaypanel-demo'>
					<DataTable
						value={products}
						selectionMode='single'
						paginator
						rows={5}
						selection={selectedProduct}
						onSelectionChange={onProductSelect}>
						<Column
							field='شماره تیکت'
							header='شماره تیکت'
							sortable
						/>
						<Column header='موضوع تیکت' />
						<Column
							field='تاریخ'
							header='تاریخ'
							sortable
							body={priceBody}
						/>
					</DataTable>
				</OverlayPanel>
			</div>
		</div>
	);
}
