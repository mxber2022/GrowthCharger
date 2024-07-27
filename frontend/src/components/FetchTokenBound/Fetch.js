import React from 'react';
import './Fetch.css';
import { useAccount, useConnect } from 'wagmi';

function Fetch() {
    const { address, isConnected } = useAccount();
    const { provider } = useConnect();

    return (
        <section style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', backgroundColor: '#FFF4E3', borderRadius: '15px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}>
            <h1 style={{ color: '#F76C6C' }}>DAO-Governed Crowdfunding Platform</h1>
            <p style={{ fontSize: '1.1rem', color: '#333' }}>
                Welcome to the DAO-Governed Crowdfunding Platform, a decentralized and transparent platform designed to support social causes aimed at poverty reduction and sustainable development. This platform leverages blockchain technology and Decentralized Autonomous Organizations (DAOs) to ensure secure, transparent, and community-driven fundraising and project management.
            </p>

           
            <h2 style={{ color: '#F76C6C' }}>Features</h2>
            <ul style={{ fontSize: '1.1rem', color: '#333' }}>
                <li>**Decentralized Crowdfunding**: Raise funds for social projects without a central authority.</li>
                <li>**Transparent Transactions**: All transactions are recorded on the blockchain, ensuring transparency.</li>
                <li>**Smart Contracts**: Automate fund distribution and project management through smart contracts.</li>
                <li>**Community Governance**: Decision-making is powered by the community using governance tokens.</li>
                <li>**Project Verification**: Regular updates and verifications ensure that projects stay on track and funds are used appropriately.</li>
            </ul>

            <h2 style={{ color: '#F76C6C' }}>How DAO-Governed Crowdfunding Supports SDG 17</h2>
            <p style={{ fontSize: '1.1rem', color: '#333' }}>
                The concept of DAO-governed crowdfunding aligns primarily with **UN Sustainable Development Goal 17: Partnerships for the Goals**. This goal focuses on strengthening the means of implementation and revitalizing the global partnership for sustainable development.
            </p>
            <ul style={{ fontSize: '1.1rem', color: '#333' }}>
                <li>**Strengthening Partnerships**: DAO-governed crowdfunding platforms enable diverse stakeholders—governments, NGOs, private sector, and civil society—to collaborate transparently on social projects. This fosters stronger, more accountable partnerships.</li>
                <li>**Mobilizing Resources**: By providing a transparent and efficient platform for fundraising, DAO-governed crowdfunding can mobilize financial resources from a global donor base, enhancing the availability of funds for sustainable development projects.</li>
                <li>**Technology and Innovation**: Utilizing blockchain technology and smart contracts exemplifies innovative approaches to governance and resource management, which can be replicated and scaled to other development initiatives.</li>
                <li>**Capacity-Building**: DAO platforms can serve as educational tools, improving digital literacy and financial inclusion for communities involved in crowdfunding and governance processes.</li>
                <li>**Multi-Stakeholder Participation**: Encouraging participation from various stakeholders in decision-making processes aligns with the inclusive nature of SDG 17, promoting collective action towards common goals.</li>
            </ul>

            <p style={{ fontSize: '1.1rem', color: '#333' }}>
                By aligning with SDG 17, DAO-governed crowdfunding supports the overarching aim of fostering global partnerships to achieve sustainable development across all sectors.
            </p>
        </section>
    );
}

export default Fetch;
