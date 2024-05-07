import classNames from 'classnames';
import styles from './LandingPage.module.scss';


const tree = `update/
├── common/
│   └── data/
│       └── ui/
│           ├── fontmap.xml
│           └── frontend.xml
└── x64/
    ├── data/
    │   └── cdimages/
    │       ├── scaleform_frontend.rpf
    │       ├── scaleform_generic.rpf
    │       ├── scaleform_generic_2.rpf
    │       └── scaleform_platform_pc.rpf
    ├── patch/
    │   └── data/
    │       └── cdimages/
    │           ├── scaleform_minigames.rpf
    │           ├── scaleform_minimaps.rpf
    │           └── scaleform_web.rpf
    └── textures/
        └── script_txds.rpf`;
const LandingPage = () => {
    return (
        <div className={classNames(styles.LandingPage)}>
           <div className={classNames(styles.LandingPageTree)}>{tree}</div>
       </div>
    );
};

export default LandingPage;