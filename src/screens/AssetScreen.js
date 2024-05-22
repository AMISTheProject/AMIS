import '../assets/style/styles.css';
import { PrimaryButton } from '../components/PrimaryButton';
import { DropdownList } from '../components/DropdownList';
import React, {useState} from 'react';

export const AssetScreen = ({title}) => {

    const [category, setCategory] = useState(false);
    const [asn, setAsn] = useState(false); // asset super number


    const categoryOptions= [
        { value: 'main-asset', label: 'Main Asset' },
        { value: 'improvement', label: 'Improvement' }
    ]
    
    const assetSuperNumbers = [
        {value:'1616454461', label: '1616454461'},
        {value:'1616454462', label: '1616454462'},
        {value:'1616454463', label: '1616454463'},
        {value:'1616454464', label: '1616454464'},
        {value:'1616454465', label: '1616454465'},
        {value:'1616454466', label: '1616454466'}
    ]

    return (
        <div className='asset-screen-container'>
            <div className='asset-screen-title-container'>
                <h3 className='asset-screen-title'>{title}</h3>
                <PrimaryButton className="auc-save-button" text='Save changes' bgColor='red' color='#fff'/>
            </div>

            <div className='asset-screen-form-container'>
                <div className='asset-screen-form-half-container'>
                    <h4 className='asset-screen-form-subtitle'>Standardized info</h4>

                    <div className='asset-screen-fields-container'>
                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="plant-name">Plant name</label>
                            <input className='asset-screen-input-field-prefixed' type="text" id="plant-name" name="plant-name" value='Schimatari' disabled='true'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="category">Category</label>
                            <input className='asset-screen-input-field-prefixed' type="text" id="category" name="category" value='Building' disabled='true'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="wbs-element">WBS Element</label>
                            <input className='asset-screen-input-field-prefixed' type="text" id="wbs-element" name="wbs-element" value='3857565763' disabled='true'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="wbs-desc">WBS Description</label>
                            <input className='asset-screen-input-field-prefixed' type="text" id="wbs-desc" name="wbs-desc" value='Schimatari Building B - RGB Line Project' disabled='true'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="proj-eng">Project Engineer</label>
                            <input className='asset-screen-input-field-prefixed' type="text" id="proj-eng" name="proj-eng" value='Solon Venetsanos' disabled='true'></input>
                        </div>
                        
                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="proj-eng">Cost Center</label>
                            <input className='asset-screen-input-field-prefixed' type="text" id="cost-center" name="cost-center" value='ATH1105 ' disabled='true'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="proj-eng">Currency</label>
                            <input className='asset-screen-input-field-prefixed' type="text" id="currency" name="currency" value='EURO (€)' disabled='true'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="proj-eng">Book Value</label>
                            <input className='asset-screen-input-field-prefixed' type="text" id="currency" name="currency" value='13.345,45 €' disabled='true'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="proj-eng">Purchase Order (PO)</label>
                            <input className='asset-screen-input-field-prefixed' type="text" id="purchase-order" name="purchase-order" value='459688721' disabled='true'></input>
                        </div>
                        
                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="proj-eng">PO Line</label>
                            <input className='asset-screen-input-field-prefixed' type="text" id="po-line" name="po-line" value='3' disabled='true'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="proj-eng">PO Line Description</label>
                            <input 
                            className='asset-screen-input-field-prefixed' type="text" id="po-line-desc" name="po-line-desc" value='Returnable Glass Bottle line (RGB)' disabled='true'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="proj-eng">Estimated completion date based on RFA</label>
                            <input 
                            className='asset-screen-input-field-prefixed' type="text" id="comp-date" name="comp-date" value='02.08.2024' disabled='true'></input>
                        </div>
                    </div>
                </div>
                <div className='asset-screen-form-half-container'>
                    <h4 className='asset-screen-form-subtitle'>Fill the form</h4>
                    <div className='asset-screen-fields-container'>
                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="category">Category</label>
                            <DropdownList 
                                options = {categoryOptions}
                                placeholder={'Choose a category (M/I)'}
                                startValue = {category}
                                onChange={setCategory}
                            />
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="category">Date</label>
                            <input className='asset-screen-input-field' type="text" id="date" name="date" placeholder="Choose capitalization date" ></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="main-asset-number">Main asset number</label>
                            <input className='asset-screen-input-field' type="text" id="main-asset-number" name="main-asset-number" placeholder='Must be 10 digits' ></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="extension">Extension of useful life (months)</label>
                            <input className='asset-screen-input-field' type="text" id="extension" name="extension" placeholder='Months'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="reason">Reason for extension</label>
                            <input className='asset-screen-input-field' type="text" id="reason" name="reason" placeholder='Reason' ></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="reason">Asset Super Number</label>
                            <DropdownList
                                options={assetSuperNumbers}
                                placeholder={'Must be 10 digits'}
                                startValue = {asn}
                                onChange={setAsn}
                            />
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="reason">Asset Description</label>
                            <input className='asset-screen-input-field' type="text" id="desc" name="desc" placeholder='Description'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="reason">Acquisition Value</label>
                            <input className='asset-screen-input-field' type="text" id="acq-value" name="acq-value" placeholder='Value in euros (€)'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="reason">Depreciated Value</label>
                            <input className='asset-screen-input-field' type="text" id="acq-value" name="acq-value" placeholder='Value in euros (€)'></input>
                        </div>

                        <div className='asset-screen-input-container'>
                            <label className='asset-screen-input-label' for="reason">Comment</label>
                            <input className='asset-screen-input-field' type="text" id="comment-field" name="comment-field" ></input>
                        </div>

                        <div className='footer-buttons'>
                            <PrimaryButton className="auc-save-button" text='Save Changes' bgColor='red' color='#fff'/>
                            <PrimaryButton className="auc-save-button" text='Submit AUC' bgColor='red' color='#fff'/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};