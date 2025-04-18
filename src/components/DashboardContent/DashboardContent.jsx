import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardContent = () => {
    return (
        <div className="container mt-4">
            {/* Stat Cards */}
            <div className="row text-center mb-4">
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <i class="bi bi-shuffle fs-1"></i>
                            <h3>65%</h3>
                            <p className="text-muted">Growth</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <i class="bi bi-person-circle fs-1"></i>
                            <h3>15</h3>
                            <p className="text-muted">New Users</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <i class="bi bi-coin fs-1"></i>
                            <h3>15,152</h3>
                            <p className="text-muted">Profit</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features + OS Stats */}
            <div className="row">
                {/* Feature Cards */}
                <div className="col-lg-8">
                    <div className="row g-3">
                        {[
                            { icon: "bi-envelope", label: "Messages" },
                            { icon: "bi-people", label: "Clients" },
                            { icon: "bi-arrow-left-right", label: "Expenses" },
                            { icon: "bi-cart", label: "Total Sales" },
                            { icon: "bi-megaphone", label: "Social Feed" },
                            { icon: "bi-bar-chart", label: "Bounce Rate" },
                        ].map(({ icon, label }, idx) => (
                            <div key={idx} className="col-md-4">
                                <div className="card text-center shadow-sm">
                                    <div className="card-body">
                                        <i className={`${icon} fs-2 mb-2`}></i>
                                        <p className="text-muted">{label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* OS Stats */}
                <div className="col-lg-4 mt-4 mt-lg-0">
                    {[
                        { name: "Windows 8", percent: 78, color: "primary" },
                        { name: "Mac", percent: 56, color: "success" },
                        { name: "Linux", percent: 44, color: "warning" },
                        { name: "iPhone", percent: 67, color: "danger" },
                    ].map(({ name, percent, color }, idx) => (
                        <div key={idx} className="mb-3">
                            <div className="d-flex justify-content-between">
                                <span>{name}</span>
                                <span>{percent}%</span>
                            </div>
                            <div className="progress">
                                <div
                                    className={`progress-bar bg-${color}`}
                                    style={{ width: `${percent}%` }}
                                    role="progressbar"
                                    aria-valuenow={percent}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardContent;
