import React, { useState } from 'react';
import './SlideBarComponent.scss';

const SlideBarComponent = () => {
    const [incomeDropdownOpen, setIncomeDropdownOpen] = useState(false);
    const [leaveDropdownOpen, setLeaveDropdownOpen] = useState(false);
    const [benefitDropdownOpen, setBenefitDropdownOpen] = useState(false);

    const toggleIncomeDropdown = () => setIncomeDropdownOpen(!incomeDropdownOpen);
    const toggleLeaveDropdown = () => setLeaveDropdownOpen(!leaveDropdownOpen);
    const toggleBenefitDropdown = () => setBenefitDropdownOpen(!benefitDropdownOpen);

    return (
        <div className="sidebar">
            <div className="sidebar-menu">
                <div className="active">
                    <a href="#"><i className="bi bi-house-door"></i> Dashboard</a>
                </div>

                <div>
                    <a href="#"><i className="bi bi-envelope"></i> Messages</a>
                </div>

                <div>
                    <a href="#" className="dropdown-toggle" onClick={toggleIncomeDropdown}>
                        <i className="bi bi-currency-dollar"></i> Tổng thu nhập
                        <i className={`bi bi-chevron-down dropdown-icon ${incomeDropdownOpen ? 'rotate' : ''}`}></i>
                    </a>
                    {incomeDropdownOpen && (
                        <ul className="submenu">
                            <li><a href="#">Theo cổ đông</a></li>
                            <li><a href="#">Theo giới tính</a></li>
                            <li><a href="#">Theo sắc tộc</a></li>
                            <li><a href="#">Partime or FullTime</a></li>
                            <li><a href="#">Theo phòng ban</a></li>
                        </ul>
                    )}
                </div>

                <div>
                    <a href="#" className="dropdown-toggle" onClick={toggleLeaveDropdown}>
                        <i className="bi bi-calendar-check"></i> Tổng ngày nghỉ phép
                        <i className={`bi bi-chevron-down dropdown-icon ${leaveDropdownOpen ? 'rotate' : ''}`}></i>
                    </a>
                    {leaveDropdownOpen && (
                        <ul className="submenu">
                            <li><a href="#">Theo cổ đông</a></li>
                            <li><a href="#">Theo giới tính</a></li>
                            <li><a href="#">Theo sắc tộc</a></li>
                            <li><a href="#">Partime or FullTime</a></li>
                        </ul>
                    )}
                </div>

                <div>
                    <a href="#" className="dropdown-toggle" onClick={toggleBenefitDropdown}>
                        <i className="bi bi-gift"></i> Trung bình quyền lợi được chi trả
                        <i className={`bi bi-chevron-down dropdown-icon ${benefitDropdownOpen ? 'rotate' : ''}`}></i>
                    </a>
                    {benefitDropdownOpen && (
                        <ul className="submenu">
                            <li><a href="#">Theo cổ đông</a></li>
                            <li><a href="#">Theo gói quyền lợi</a></li>
                        </ul>
                    )}
                </div>

                <div>
                    <a href="#"><i className="bi bi-box-arrow-right"></i> Logout</a>
                </div>
            </div>
        </div>
    );
};

export default SlideBarComponent;
