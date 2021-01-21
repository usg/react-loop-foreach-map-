import React, { Component } from 'react';
import { connect } from 'dva';
import { Dispatch } from 'redux';
import { Avatar, message, Form, Button, Checkbox, Row, Col } from 'antd';
import { FormComponentProps } from 'antd/es/form';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { IStateType } from '../../model';
import styles from './index.less';
import { UserListItem, UserListPagination, UserListParams } from '../../data';

export interface UserTableProps extends FormComponentProps {
  loading?: boolean;
  dispatch?: Dispatch;
  dvaUserSetting?: IStateType;
  handleModalVisible: (modal: string, flag?: boolean, record?: Partial<UserListItem>) => void;
}

interface UserTableState {
  selectedRowKeys: string[];
}

class CPNUserSettingUserList extends Component<UserTableProps, UserTableState> {
  userRows = {
    Assets: [
      {
        row: 'group1',
        name: 'Add edit and retire assets',
        vals: [1, 2, 3, 4, 5]

      },
      {
        row: 'group2',
        name: 'Delete assets',
        vals: [1, 2, 3, 4, 5]
      },
      {
        row: 'group3',
        name: 'Transfer assets',
        vals: [1, 2, 3, 4, 5]
      },

    ],
    Asetting: [
      {
        row: 'group1',
        name: 'View network page ',
        vals: [1, 2, 3, 4, 5]

      },
      {
        row: 'group2',
        name: 'Add,edit and detete GW,LGW',
        vals: [1, 2, 3, 4, 5]
      },
      {
        row: 'group3',
        name: 'Add,edit and detele Tag',
        vals: [1, 2, 3, 4, 5]
      },
    ]
  };

  roleVals = {
    Assets: [
      {
        row: 'group1',
        name: 'Add edit and retire assets',
        vals: [1, 0, 3, 0, 5]

      },
      {
        row: 'group2',
        name: 'Delete assets',
        vals: [1, 2, 3, 4, 5]
      },
      {
        row: 'group3',
        name: 'Transfer assets',
        vals: [1, 2, 3, 4, 5]
      }

    ],
    Asetting: [
      {
        row: 'group1',
        name: 'View network page ',
        vals: [1, 2, 3, 4, 5]

      },
      {
        row: 'group2',
        name: 'Add,edit and detete GW,LGW',
        vals: [1, 2, 0, 4, 5]
      },
      {
        row: 'group3',
        name: 'Add,edit and detele Tag',
        vals: [1, 2, 3, 0, 5]
      },
    ]
  }

  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch({
        type: 'dvaUserSetting/fetch',
      });
      dispatch({
        type: 'dvaUserSetting/fetchDepartmentList',
      });
    }
  }


  handleUserTableChange = (
    pagination: Partial<UserListPagination>,
    filtersArg: Partial<Record<keyof UserListItem, string[]>>,
    sorter: SorterResult<UserListItem>,
  ) => {
    const { dispatch } = this.props;
    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params: Partial<UserListParams> = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }
    if (dispatch) {
      dispatch({
        type: 'dvaUserSetting/fetch',
        payload: params,
      });
    }
  };

  onChangeCheckox = (e: any) => {
    console.log(e);
  }

  render() {
    const { dvaUserSetting, loading, handleModalVisible } = this.props;
    const { userData } = dvaUserSetting || {};

    const VR = {};
    const l = this.roleVals;

    Object.keys(l).forEach(ele => {
      VR[ele] = {};
      l[ele].forEach((sele: any) => {
        VR[ele][sele.row] = sele.vals;
      });
    })

    return (
      <div style={{ width: '100%' }} className={styles.roleCart}>
        <Row justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={6}>
            Action on assets
            </Col>
          <Col span={3}>
            Guest
          </Col>
          <Col span={3}>
            Operator
          </Col>
          <Col span={3}>
            Supervisor
          </Col>
          <Col span={3}>
            Technican
            </Col>
          <Col span={3}>
            Administrator
          </Col>
        </Row>
        { this.userRows.Assets && this.userRows.Assets.length > 0 && (
          this.userRows.Assets.map((item, index) => (
            < Checkbox.Group defaultValue={VR.Assets[item.row]} name={item.row} key={`row_${index}`} onChange={(e) => this.onChangeCheckox({ type: 'Assets', group: item.row, val: e })} style={{ width: "100%" }}>
              <Row justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={6} style={{ textAlign: 'right', paddingRight: '48px' }}>
                  {item.name}
                </Col>
                {item.vals && item.vals.length > 0 && (
                  item.vals.map((sonVal, sonIndex) => (
                    <Col span={3} key={`row_${index}_col_${sonIndex}`} className={styles.checkboxCol}>
                      <Checkbox value={sonVal}>{sonVal}</Checkbox>
                    </Col>
                  ))
                )}
              </Row>
            </Checkbox.Group>
          )))
        }
        <Row justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={6}>
            Action on Setting
            </Col>
          <Col span={15}>
          </Col>
        </Row>
        {
          this.userRows.Asetting && this.userRows.Asetting.length > 0 && (
            this.userRows.Asetting.map((item, index) => (
              <Checkbox.Group
                defaultValue={VR.Asetting[item.row]}
                name={item.row} key={`row_${index}`}
                onChange={(e) => this.onChangeCheckox({ type: 'Asetting', group: item.row, val: e })}
                style={{ width: "100%" }}>
                <Row justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col span={6} style={{ textAlign: 'right', paddingRight: '48px' }}>
                    {item.name}
                  </Col>
                  {item.vals && item.vals.length > 0 && (
                    item.vals.map((sonVal, sonIndex) => (
                      <Col span={3} key={`row_${index}_col_${sonIndex}`} className={styles.checkboxCol}>
                        <Checkbox value={sonVal}>{sonVal}</Checkbox>
                      </Col>
                    ))
                  )}
                </Row>
              </Checkbox.Group>
            ))
          )
        }
      </div >
    );
  }
}


export default Form.create<UserTableProps>({ name: 'userSetting_users_UserTable' })(
  connect(
    ({
      dvaUserSetting,
      loading,
    }: {
      dvaUserSetting: IStateType;
      loading: { effects: { [key: string]: boolean } };
    }) => ({
      dvaUserSetting,
      loading: loading.effects['dvaUserSetting/fetch'],
    }),
  )(CPNUserSettingUserList),
);

