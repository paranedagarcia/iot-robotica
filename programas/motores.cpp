// MOTOR 1
int IN1 = 2;
int IN2 = 7;
int ENA = 6;
// MOTOR 2
int IN3 = 4;
int IN4 = 3;
int ENB = 5;

void setup() {
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(ENA, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  pinMode(ENB, OUTPUT);
}

void loop() {
  avanza();
  delay(3000);
  retrocede();
  delay(3000);
  derecha();
  delay(3000);
  izquierda();
}
void parada(uint16_t tiempo) {
  parar();
  delay(tiempo);
}
void avanza(){
  Serial.println("[FASE 1] Moviendo hacia adelante (Velocidad: 100%)");
  // Motor A: IN1 en HIGH e IN2 en LOW configura giro en un sentido
  analogWrite (ENA, 150); // analogWrite con 255 es velocidad máxima (100% de ancho de pulso)
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  // Motor B: IN3 en HIGH e IN4 en LOW configura giro en un sentido
  analogWrite(ENB, 150);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
}
void retrocede(){
  // ----------------------------------------------------
  // FASE 3: MOVER AMBOS MOTORES HACIA ATRÁS (Velocidad Media)
  // ----------------------------------------------------
  Serial.println("[FASE 3] Moviendo hacia atras (Velocidad: 60%)");
  // Al invertir el estado de los pines IN, el motor gira en sentido contrario
 // MOTOR 1 
  analogWrite(ENA, 150); // Escribe un pseudo-valor de velocidad media (150 de 255)
  digitalWrite(IN2, HIGH);
  digitalWrite(IN1, LOW);
  // MOTOR 2
  analogWrite(ENB, 150);
  digitalWrite(IN4, HIGH);
  digitalWrite(IN3, LOW);

  delay(3000); // Retrocede durante 3 segundos
}
void derecha(){
 // MOTOR 1 
  analogWrite (ENA, 150);
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  // MOTOR 2
  analogWrite (ENB, 150);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH); 
}
void izquierda(){
 // MOTOR 1 
  analogWrite (ENA, 150);
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  // MOTOR 2
  
  analogWrite (ENB, 150);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  
}
// --- FUNCIÓN AUXILIAR PARA DETENER EL GIRO DE AMBOS MOTORES ---
void parar(){
  // ----------------------------------------------------
  // FRENAR MOTORES (Parada de emergencia)
  // ----------------------------------------------------
  Serial.println("[FASE 2] Deteniendo motores...");
 // MOTOR 1 
  analogWrite(ENA, 0);
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  // MOTOR 2
  
  analogWrite(ENB, 0);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
}