import React from 'react';
import { useRecoilValue } from 'recoil';
import { OrderInformation } from '@/store/atoms.js'
import ConfirmGoodsTable from 'components/Confirm/ConfirmGoodsTabel';
import './index.scss'
import ConfirmGoodsDetail from 'components/Confirm/ConfirmGoodsDetail';
import ConfirmGoodsRemarks from 'components/Confirm/ComfirmGoodsRemarks';

/**抢购成功购买确认页面 */
const ConfirmPage = () => {
    const goodsInfo = useRecoilValue(OrderInformation)
    return (
        <div className='confirm-block'>
            <aside className='table-remarks'>
                <ConfirmGoodsTable goodsInfo={goodsInfo}/>
                <ConfirmGoodsRemarks />
            </aside>
            <div className='v-divider'></div>
            <ConfirmGoodsDetail goodsInfo={goodsInfo}/>
        </div>
    );
}

export default ConfirmPage;
