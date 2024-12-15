import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "reactstrap";
import './SowingForm.css'; // Import the CSS file

const SowingForm = () => {
  const [farmerId, setFarmerId] = useState("Orma_00001");
  const [landId, setLandId] = useState("Orma_00001-1");
  const [crop, setCrop] = useState("Tomatoes");
  const [sowingDate, setSowingDate] = useState("2024-08-01");
  const [sownQuantity, setSownQuantity] = useState(500);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [isEditable, setIsEditable] = useState(false); // New state for controlling edit mode

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Show spinner

    // Simulate a delay (e.g., 2 seconds)
    setTimeout(() => {
      const formData = {
        farmerId,
        landId,
        crop,
        sowingDate,
        sownQuantity,
      };
      setSubmittedData(formData); // Store submitted data
      setIsSubmitting(false); // Hide spinner
      setIsModalOpen(true); // Show modal with data
      setIsEditable(false); // Reset edit mode after submit
    }, 2000); // 2 second delay to simulate an API request
  };

  const handleEdit = () => {
    setIsEditable(!isEditable); // Toggle the editable state when edit button is clicked
  };

  const handleCancel = () => {
    setIsEditable(false); // Reset editable state
    // Optionally reset form data to initial values if needed
    setFarmerId("Orma_00001");
    setLandId("Orma_00001-1");
    setCrop("Tomatoes");
    setSowingDate("2024-08-01");
    setSownQuantity(500);
  };

  return (




    <div className="main-container" >
    {/* Sidebar */} 
    <div className="sidebar" style={{height:'100vh',marginTop:'5.6%',position:'fixed',width:'250px',overflowY:'auto',zIndex:'1',backgroundColor:'white',color:'black'}}>

      <NavLink to="/New" className={({ isActive }) => (isActive ? 'side-link active-link' : 'side-link')}>
        Yield Forecast
      </NavLink>
      <NavLink to="/farmersdashboard" className={({ isActive }) => (isActive ? 'side-link active-link' : 'side-link')}>
        Farmer's Under Jurisdiction
      </NavLink>
      <NavLink to="/land" className={({ isActive }) => (isActive ? 'side-link active-link' : 'side-link')}>
        Land Under Jurisdiction
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'side-link active-link' : 'side-link')}>
        Marketing Insights
      </NavLink>
      <NavLink to="/stakeholder" className={({ isActive }) => (isActive ? 'side-link active-link' : 'side-link')}>
        Stakeholder Management
      </NavLink>
      <NavLink to="/showing" className={({ isActive }) => (isActive ? 'side-link active-link' : 'side-link')}>
        Farmer's Input
      </NavLink>
      <NavLink to="/map" className={({ isActive }) => (isActive ? 'side-link active-link' : 'side-link')}>
        Map
      </NavLink>
      <NavLink to="/register" className={({ isActive }) => (isActive ? 'side-link active-link' : 'side-link')}>
        Account User
      </NavLink>
    </div>





    <div className="form-container" style={{marginTop:'30px'}}>
      <h2 className="heading">This is the sowing data !!</h2> {/* Corrected placement */}
      
      <Form onSubmit={handleSubmit}>
        {/* Farmer ID */}
        <FormGroup>
          <Label for="farmerId">Farmer ID</Label>
          <Input
            type="select"
            id="farmerId"
            value={farmerId}
            onChange={(e) => setFarmerId(e.target.value)}
            disabled={!isEditable} // Make field editable based on isEditable
          >
            <option value="Orma_00001">Orma_00001</option>
            <option value="Orma_00002">Orma_00002</option>
          </Input>
        </FormGroup>

        {/* Land ID */}
        <FormGroup>
          <Label for="landId">Land ID</Label>
          <Input
            type="select"
            id="landId"
            value={landId}
            onChange={(e) => setLandId(e.target.value)}
            disabled={!isEditable}
          >
            <option value="Orma_00001-1">Orma_00001-1</option>
            <option value="Orma_00001-2">Orma_00001-2</option>
          </Input>
        </FormGroup>

        {/* Crop */}
        <FormGroup>
          <Label for="crop">Crop</Label>
          <Input
            type="select"
            id="crop"
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            disabled={!isEditable}
          >
            <option value="Tomatoes">Tomatoes</option>
            <option value="Corn">Corn</option>
            <option value="Wheat">Wheat</option>
          </Input>
        </FormGroup>

        {/* Sowing Date */}
        <FormGroup>
          <Label for="sowingDate">Sowing Date</Label>
          <Input
            type="date"
            id="sowingDate"
            value={sowingDate}
            onChange={(e) => setSowingDate(e.target.value)}
            disabled={!isEditable}
          />
        </FormGroup>

        {/* Sown Quantity */}
        <FormGroup>
          <Label for="sownQuantity">Sown Quantity</Label>
          <Input
            type="number"
            id="sownQuantity"
            value={sownQuantity}
            onChange={(e) => setSownQuantity(e.target.value)}
            disabled={!isEditable}
          />
        </FormGroup>

        {/* Buttons Section */}
        <div className="form-buttons">
          {/* Edit / Save Button */}
          <Button color="warning" onClick={handleEdit} disabled={isSubmitting}>
            {isEditable ? "Save" : "Edit"} {/* Toggle button text based on isEditable */}
          </Button>

          {/* Cancel Button */}
          <Button className="cancel" color="secondary" onClick={handleCancel} disabled={isSubmitting}>
            Cancel
          </Button>

          {/* Submit & Spinner */}
          <Button color="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Spinner size="sm" color="light" /> : "Submit"}
          </Button>
        </div>
      </Form>

      {/* Modal to display submitted data */}
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Form Submitted</ModalHeader>
        <ModalBody>
          {submittedData ? (
            <div>
              <p>Farmer ID: {submittedData.farmerId}</p>
              <p>Land ID: {submittedData.landId}</p>
              <p>Crop: {submittedData.crop}</p>
              <p>Sowing Date: {submittedData.sowingDate}</p>
              <p>Sown Quantity: {submittedData.sownQuantity}</p>
            </div>
          ) : (
            <p>No data submitted yet.</p>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
    </div>
    
  );
};

export default SowingForm;
