import styles from '@/styles/VideoPage.module.css';
import VideoCard from '@/components/VideoCard';

export default function VideoPage() {
    return (
        <>
            <div className={styles['container-video']}>
                <VideoCard url='https://youtu.be/iERYAx3iipw' />
                <VideoCard url='https://youtu.be/YhVlV_dMoxg' />
                <VideoCard url='https://youtu.be/D2rnH9XqwvA' />
                <VideoCard url='https://youtu.be/PDCHDYsBDWA' />
                <VideoCard url='https://youtu.be/VxVDJhMU6Zc' />
                <VideoCard url='https://youtu.be/P0NxHvWz1ns' />
                <VideoCard url='https://youtu.be/w_tkq4syNnI' />
                <VideoCard url='https://youtu.be/HM1ld5vIqFg' />
                <VideoCard url='https://youtu.be/f4muqjlSwYI' />
                <VideoCard url='https://youtu.be/zJJGrPb8ymE' />
                <VideoCard url='https://youtu.be/oXpj4H9Qrcw' />
                <VideoCard url='https://youtu.be/unITcghHNVI' />
                <VideoCard url='https://youtu.be/HCl4m9ojMMc' />
                <VideoCard url='https://youtu.be/u7jJ2coeBRo' />
                <VideoCard url='https://youtu.be/GX7TAigwZPw' />
                <VideoCard url='https://youtu.be/S1pFkcsuMYE' />
                <VideoCard url='https://youtu.be/yhtxX3JkShI' />
                <VideoCard url='https://youtu.be/0TJkcTWEu9c' />
                <VideoCard url='https://youtu.be/9W4eyQ7LP7g' />
                <VideoCard url='https://youtu.be/swFVafJvVac' />
            </div>
        </>
    );
}