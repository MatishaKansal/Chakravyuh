# Chakravyuh – Predictive Cyber Threat Detection System

Chakravyuh is an AI-powered cyber-defence platform designed to predict, detect, and prevent cyber threats before they strike.
Built for police units, defence partners, and government departments, Chakravyuh provides real-time monitoring, behaviour-based threat prediction, and early-warning alerts with minimal technical requirements.

**🚀 Features**

Predictive Threat Detection
ML/AI models analyse network behaviour and detect anomalies before an attack happens.

Real-Time Monitoring Dashboard
Centralised interface showing alerts, logs, and live system health.

Low-Cost Deployment
Hybrid model supporting both cloud and on-premise deployment.

Minimal Training Required
Tailored for government workflows with simple UI.

**📦 Project Structure**
/Chakravyuh
│
├── src/
│   ├── models/          # ML models for anomaly + threat prediction
│   ├── data/            # Training & system logs
│   ├── utils/           # Helper functions (logging, preprocessing)
│   ├── dashboard/       # Frontend dashboard code
│   └── main.py          # Main execution file
│
├── config/
│   └── settings.yaml    # Model + system configuration
│
├── requirements.txt     # Python dependencies
└── README.md            # Project documentation

**⚙️ How to Run the Project**
1. Clone the Repository
git clone https://github.com/your-repo/chakravyuh.git
cd chakravyuh

2. Install Dependencies
pip install -r requirements.txt

3. Start the System
python main.py

4. Access the Dashboard

Once the system is running, open:

http://localhost:8000

**🧠 Technology Stack**

Python (core backend)

Scikit-learn / TensorFlow / PyTorch (ML models)

FastAPI / Flask (backend server)

React / HTML / JS (dashboard UI)

SQLite / MongoDB (logs & predictions storage)

**🛡️ Key Modules**
1. Threat Prediction Engine

Anomaly detection

Behavioural pattern analysis

Threat scoring system

2. Network Analysis Layer

Packet monitoring

Log ingestion

Suspicious activity tracking

3. Alerting System

Instant notifications

Priority-based warnings

JSON / API outputs

**🧪 Model Training**

To retrain or update the prediction model:

python src/models/train_model.py


Training data should be kept inside:

/src/data/

**📊 Industry Use Cases**

Police departments

Defence communication systems

Government digital infrastructure

Critical infrastructure (power grids, transport, telecom)

**🤝 Team**

Harshdeep Singh

Lavanya Verma

Matisha Kansal
