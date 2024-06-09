import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import DataTable from 'datatables.net-bs5';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-buttons-dt/css/buttons.dataTables.min.css';
import 'datatables.net-dt/js/dataTables.dataTables.min.js';
import 'datatables.net-buttons-dt/js/buttons.dataTables.min.js';
import 'datatables.net-buttons/js/buttons.html5.min.js';
import 'datatables.net-buttons/js/buttons.print.min.js';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

DataTable.Buttons.pdfMake(pdfMake);
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const MySwal = withReactContent(Swal);

const DataTableWithExport = () => {
    const tableRef = useRef(null);

    useEffect(() => {
        const data = [
            { id: 1, name: 'John', age: 30, email: 'john@example.com' },
            { id: 2, name: 'Jane', age: 25, email: 'jane@example.com' },
            { id: 3, name: 'Bob', age: 35, email: 'bob@example.com' },
        ];

        $(tableRef.current).DataTable({
            data: data,
            columns: [
                { title: 'ID', data: 'id' },
                { title: 'Name', data: 'name' },
                { title: 'Age', data: 'age' },
                { title: 'Email', data: 'email' },
                {
                    title: 'Actions',
                    data: null,
                    render: (data, type, row) => {
                        return (
                            `<button class="btn btn-primary view-btn">View</button>
                            <button class="btn btn-warning edit-btn">Edit</button>
                            <button class="btn btn-danger delete-btn">Delete</button>`
                        );
                    },
                },
            ],
            dom: 'Bfrtip',
            buttons: ['copyHtml5', 'excelHtml5', 'csvHtml5', 'pdfHtml5', 'print'],
            scrollX: true,
        });

        $(tableRef.current).on('click', '.view-btn', (event) => {
            const rowData = getRowData(event);
            handleViewClick(rowData);
        });

        $(tableRef.current).on('click', '.edit-btn', (event) => {
            const rowData = getRowData(event);
            handleEditClick(rowData);
        });

        $(tableRef.current).on('click', '.delete-btn', (event) => {
            const rowData = getRowData(event);
            handleDeleteClick(rowData);
        });

        return () => {
            $(tableRef.current).DataTable().destroy();
        };
    }, []);

    const getRowData = (event) => {
        const row = $(event.target).closest('tr');
        const rowData = $(tableRef.current).DataTable().row(row).data();
        return rowData;
    };

    const handleViewClick = (rowData) => {
        MySwal.fire({
            title: 'View Details',
            html: `ID: ${rowData.id}<br>Name: ${rowData.name}<br>Age: ${rowData.age}<br>Email: ${rowData.email}`,
            icon: 'info',
            confirmButtonText: 'OK',
        });
    };

    const handleEditClick = (rowData) => {
        MySwal.fire({
            title: 'Edit Details',
            html: `Editing ID: ${rowData.id}`,
            icon: 'info',
            confirmButtonText: 'OK',
        });
    };

    const handleDeleteClick = (rowData) => {
        MySwal.fire({
            title: 'Delete Confirmation',
            text: `Are you sure you want to delete ID: ${rowData.id}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                MySwal.fire('Deleted!', `ID: ${rowData.id} has been deleted.`, 'success');
            }
        });
    };

    return (
        <div className='table-responsive'>
            <table ref={tableRef} className="display" style={{ width: '100%' }}>
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    {/* table content */}
                </tbody>
            </table>
        </div>
    );
};

export default DataTableWithExport;
