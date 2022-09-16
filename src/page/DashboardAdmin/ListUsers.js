import React, { memo, useEffect, useMemo, useState } from 'react'
import { Table, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersAction, searchUsersAction } from '../../redux/actions/quanLiNguoiDungAction';
import { BsSearch } from 'react-icons/bs'
import { AiOutlineDelete, AiFillEdit, AiOutlineInfoCircle } from 'react-icons/ai'
import useDebounce from '../../hooks/useDebounce';

const columns = [
    {
        title: 'Account',
        dataIndex: 'taiKhoan',
        key: 'taiKhoan',
        sorter: {
            compare: (a, b) => {
                const x = a.taiKhoan.length
                const y = b.taiKhoan.length
                return x - y
            },
            multiple: 3,
        },
    },
    {
        title: 'User name',
        dataIndex: 'hoTen',
        key: 'hoTen',
        sorter: {
            compare: (a, b) => {
                const x = a.hoTen.length
                const y = b.hoTen.length
                return x - y
            },
            multiple: 3,
        },
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        sorter: {
            compare: (a, b) => {
                const x = a.email.length
                const y = b.email.length
                return x - y
            },
            multiple: 2,
        },
    },
    {
        title: 'Phone',
        dataIndex: 'soDt',
        key: 'soDt',
    },
    {
        title: 'Type',
        dataIndex: 'maLoaiNguoiDung',
        key: 'maLoaiNguoiDung',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
    },
];

function ListUsers() {
    const dispatch = useDispatch()

    const [searchValue, setSearchValue] = useState('')
    const searchDebounce = useDebounce(searchValue, 500)

    const { arrAllUsers } = useSelector(state => state.QuanLiNguoiDungReducer)

    useEffect(() => {
        dispatch(getAllUsersAction)
    }, [])

    useEffect(() => {
        if (searchDebounce) dispatch(searchUsersAction(searchDebounce))
        if (searchDebounce === '') dispatch(getAllUsersAction)
    }, [searchDebounce])

    const data = useMemo(() => {
        return arrAllUsers.map((user, index) => ({
            key: index + 1,
            taiKhoan: user.taiKhoan,
            hoTen: user.hoTen,
            email: user.email,
            soDt: user.soDt,
            maLoaiNguoiDung: user.maLoaiNguoiDung,
            action: <div className='action-icon'>
                <Tooltip placement="top" title="Infomation">
                    <AiOutlineInfoCircle className='icon action-icon__info' />
                </Tooltip>
                <Tooltip placement="top" title="Delete">
                    <AiOutlineDelete className='icon action-icon__delete' />
                </Tooltip>
                <Tooltip placement="top" title="Edit">
                    <AiFillEdit className='icon action-icon__edit' />
                </Tooltip>
            </div>
        }))
    }, [arrAllUsers])

    return (
        <div className='listUsers'>
            <div className='containerDashboard'>
                <div className='listUsers__search'>
                    <input placeholder='Search user here!' onChange={e => setSearchValue(e.target.value)}
                    />
                    <div className='icon-search'>
                        <BsSearch />
                    </div>
                </div>
                <div className='listUsers__table'>
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        </div>
    )
}
export default memo(ListUsers)
