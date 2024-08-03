import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const ExploreContainer: React.FC = () => {
    const [showAll, setShowAll] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<{ title: string; imageUrl: string }>({ title: '', imageUrl: '' });

    const games = [
        { title: 'Assassins Creed® Valhalla', imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202006/1520/EDtkdijFRwbmGKk1G9lrDoEF.png' },
        { title: 'Mega Man X', imageUrl: 'https://image.api.playstation.com/cdn/UP0102/CUSA10785_00/2sVS37soRpUNtjao9TApqyUU6p2jFWg1.png' },
        { title: 'The Legend of Zelda', imageUrl: 'https://zelda.nintendo.com/assets/icons/share_icon-tw.jpg' },
        { title: 'Pac-Man', imageUrl: 'https://static.tvtropes.org/pmwiki/pub/images/pac_man_official_pacman_video_game.png' },
        { title: 'Super Mario World', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_698593-MLU74159798865_012024-O.webp' },
    ];

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const openModal = (game: { title: string; imageUrl: string }) => {
        setModalContent(game);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
        <IonList>
            <IonListHeader>
            <IonLabel>Video Games</IonLabel>
            <IonButton color="tertiary" onClick={toggleShowAll}>
                {showAll ? 'Ver menos' : 'Ver todo'}
            </IonButton>
            </IonListHeader>
            {games.slice(0, showAll ? games.length : 0).map((game, index) => (
            <IonItem key={index} onClick={() => openModal(game)}>
                <IonLabel>{game.title}</IonLabel>
            </IonItem>
            ))}
        </IonList>

        <IonModal isOpen={showModal} onDidDismiss={closeModal}>
            <IonHeader>
            <IonToolbar>
                <IonTitle>{modalContent.title}</IonTitle>
                <IonButton slot="end" onClick={closeModal}>Close</IonButton>
            </IonToolbar>
            </IonHeader>
            <IonContent>
            <img src={modalContent.imageUrl} alt={modalContent.title} style={{ width: '100%' }} />
            </IonContent>
        </IonModal>
        </>
    );
};

export default ExploreContainer;
