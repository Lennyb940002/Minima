import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DashboardCard } from './DashboardCard';
import { DASHBOARD_SECTIONS } from './dashboardConfig';

export const DashboardGrid: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 p-6"
            style={{
                width: '1250px',
                marginLeft: '5%',
                marginTop: '7.5%'
            }}
        >
            {DASHBOARD_SECTIONS.map((section) => (
                <div
                    key={section.title}
                    onClick={() => navigate(section.path)}
                    className="w-3/4 mx-auto cursor-pointer"
                >
                    <DashboardCard
                        title={section.title}
                        image={section.imageBlanc}
                        imageSurvol={section.imageNoir}
                    />
                </div>
            ))}
        </div>
    );
};