import '../assets/style/styles.css';
import { PrimaryButton } from '../components/PrimaryButton';

export const AssetScreen = ({title}) => {
    return (
        <div className='asset-screen-container'>
            <div className='asset-screen-title-container'>
                <h3 className='asset-screen-title'>{title}</h3>
                <PrimaryButton text='Save changes' bgColor='red' color='#fff'/>
            </div>

            <div className='asset-screen-form-container'>
                <div className='asset-screen-form-half-container'>
                    <h4 className='asset-screen-form-subtitle'>Standardized info</h4>

                    <div className='asset-screen-fields-container'>
                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="plant-name">Plant name</label>
                            <input className='asset-screen-input-field' type="text" id="plant-name" name="plant-name" value='Schimatari' disabled='true'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="category">Category</label>
                            <input className='asset-screen-input-field' type="text" id="category" name="category" value='Building' disabled='true'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="wbs-element">WBS Element</label>
                            <input className='asset-screen-input-field' type="text" id="wbs-element" name="wbs-element" value='3857565763' disabled='true'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="wbs-desc">WBS Description</label>
                            <input className='asset-screen-input-field' type="text" id="wbs-desc" name="wbs-desc" value='Schimatari Building B - RGB Line Project' disabled='true'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="wbs-desc">WBS Description</label>
                            <input className='asset-screen-input-field' type="text" id="wbs-desc" name="wbs-desc" value='Schimatari Building B - RGB Line Project' disabled='true'></input>
                        </div>
                    </div>
                </div>
                <div className='asset-screen-form-half-container'>
                    <h4 className='asset-screen-form-subtitle'>Fill the form</h4>

                    <div className='asset-screen-fields-container'>
                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="plant-name">Plant name</label>
                            <input className='asset-screen-input-field' type="text" id="plant-name" name="plant-name" placeholder='Schimatari'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="category">Category</label>
                            <input className='asset-screen-input-field' type="text" id="category" name="category" ></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="wbs-element">WBS Element</label>
                            <input className='asset-screen-input-field' type="text" id="wbs-element" name="wbs-element" ></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="wbs-desc">WBS Description</label>
                            <input className='asset-screen-input-field' type="text" id="wbs-desc" name="wbs-desc" ></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="wbs-desc">WBS Description</label>
                            <input className='asset-screen-input-field' type="text" id="wbs-desc" name="wbs-desc" ></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};