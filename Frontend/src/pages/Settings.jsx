import { useState } from "react";
import {
  BellRing,
  Bot,
  Box,
  Building2,
  Camera,
  ChevronRight,
  Palette,
  Save,
  ShieldCheck,
} from "lucide-react";

import "../styles/settings.css";
import "../styles/variables.css";
const settingMenu = [
  { label: "Pharmacy Profile", icon: Building2 },
  { label: "Inventory Rules", icon: Box },
  { label: "Notifications", icon: BellRing },
  { label: "AI Assistant", icon: Bot },
  { label: "Security", icon: ShieldCheck },
  { label: "Appearance", icon: Palette },
];

function Settings() {
  const [activeMenu, setActiveMenu] = useState("Pharmacy Profile");

  const [profile, setProfile] = useState({
    pharmacyName: "MediCare Pharmacy",
    licenseNumber: "PH-2025-4821",
    email: "contact@medicarepharmacy.in",
    phone: "+91 98765 43210",
    address: "MG Road, Bengaluru, Karnataka",
    timezone: "Asia/Kolkata",
  });

  const [rules, setRules] = useState({
    lowStockAlert: true,
    expiryWarning: true,
    fefoRecommendation: true,
    expiryDays: 30,
  });

  const updateProfile = (event) => {
    const { name, value } = event.target;

    setProfile((currentProfile) => ({
      ...currentProfile,
      [name]: value,
    }));
  };

  const updateRule = (name, value) => {
    setRules((currentRules) => ({
      ...currentRules,
      [name]: value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();

    console.log("Profile:", profile);
    console.log("Inventory rules:", rules);
  };

  return (
    <div className="settings-page">

      <main className="settings-content">
        <section className="settings-heading">
          <h1>Settings</h1>
          <p>Manage your pharmacy, inventory policies and notifications.</p>
        </section>

        <section className="settings-layout">
          <aside className="settings-menu-card">
            {settingMenu.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                onClick={() => setActiveMenu(label)}
                className={`settings-menu-item ${
                  activeMenu === label ? "active" : ""
                }`}
              >
                <span>
                  <Icon size={21} />
                  {label}
                </span>

                <ChevronRight size={18} />
              </button>
            ))}
          </aside>

          <form className="settings-form" onSubmit={handleSave}>
            <section className="settings-card">
              <div className="settings-card-heading">
                <h2>Pharmacy Profile</h2>
                <p>Update your pharmacy details. This information is used across the system.</p>
              </div>

              <div className="profile-form-layout">
                <label className="logo-upload-box">
                  <input type="file" accept="image/png, image/jpeg" hidden />

                  <span className="pharmacy-logo-placeholder">✚</span>

                  <span className="camera-icon">
                    <Camera size={17} />
                  </span>

                  <strong>Click to upload logo</strong>
                  <small>PNG, JPG up to 2MB</small>
                </label>

                <div className="profile-fields">
                  <div className="field-grid two-columns">
                    <label className="form-field">
                      <span>Pharmacy Name <b>*</b></span>
                      <input
                        name="pharmacyName"
                        value={profile.pharmacyName}
                        onChange={updateProfile}
                      />
                    </label>

                    <label className="form-field">
                      <span>License Number <b>*</b></span>
                      <input
                        name="licenseNumber"
                        value={profile.licenseNumber}
                        onChange={updateProfile}
                      />
                    </label>
                  </div>

                  <div className="field-grid two-columns">
                    <label className="form-field">
                      <span>Email <b>*</b></span>
                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={updateProfile}
                      />
                    </label>

                    <label className="form-field">
                      <span>Phone <b>*</b></span>
                      <input
                        name="phone"
                        value={profile.phone}
                        onChange={updateProfile}
                      />
                    </label>
                  </div>

                  <label className="form-field">
                    <span>Address <b>*</b></span>
                    <input
                      name="address"
                      value={profile.address}
                      onChange={updateProfile}
                    />
                  </label>

                  <div className="timezone-save-row">
                    <label className="form-field timezone-field">
                      <span>Timezone <b>*</b></span>
                      <select
                        name="timezone"
                        value={profile.timezone}
                        onChange={updateProfile}
                      >
                        <option>Asia/Kolkata</option>
                        <option>Asia/Dubai</option>
                        <option>Asia/Singapore</option>
                        <option>Europe/London</option>
                      </select>
                    </label>

                    <button className="save-button" type="submit">
                      <Save size={17} />
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="settings-card inventory-rules-card">
              <div className="settings-card-heading">
                <h2>Inventory Rules</h2>
                <p>Configure how inventory is monitored and managed.</p>
              </div>

              <div className="rule-row">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={rules.lowStockAlert}
                    onChange={(event) =>
                      updateRule("lowStockAlert", event.target.checked)
                    }
                  />
                  <span className="switch-slider" />
                </label>

                <div className="rule-copy">
                  <strong>Low-stock alert</strong>
                  <span>Alert when stock falls below reorder level.</span>
                </div>
              </div>

              <div className="rule-row">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={rules.expiryWarning}
                    onChange={(event) =>
                      updateRule("expiryWarning", event.target.checked)
                    }
                  />
                  <span className="switch-slider" />
                </label>

                <div className="rule-copy">
                  <strong>Expiry warning</strong>
                  <span>Notify before medicines reach their expiry date.</span>
                </div>

                <label className="expiry-days">
                  Notify
                  <input
                    type="number"
                    min="1"
                    value={rules.expiryDays}
                    onChange={(event) =>
                      updateRule("expiryDays", event.target.value)
                    }
                  />
                  days before expiry.
                </label>
              </div>

              <div className="rule-row">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={rules.fefoRecommendation}
                    onChange={(event) =>
                      updateRule("fefoRecommendation", event.target.checked)
                    }
                  />
                  <span className="switch-slider" />
                </label>

                <div className="rule-copy">
                  <strong>FEFO recommendation</strong>
                  <span>Recommend the earliest-expiry batch first.</span>
                </div>
              </div>

              <div className="settings-info">
                <span>i</span>
                Changes are saved securely and apply to all staff accounts.
              </div>
            </section>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Settings;