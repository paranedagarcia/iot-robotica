#

Para conectar todos tus componentes, utilizaremos el Arduino Uno como el cerebro central, el cual distribuirá la energía y las señales de control hacia el controlador de motores L298N, el sensor de distancia HC-SR04 y el microservo SG90.

El sensor HC-SR04 se monta físicamente sobre el eje del servo SG90 para permitirle girar y escanear el entorno. Como el L298N consumirá la energía principal de las baterías, usaremos su regulador integrado de 5V para alimentar de forma segura el Arduino, el servo y el sensor.

## Cableado



### **📋 Diagrama de Conexiones Directo**

Sigue esta guía pin por pin para realizar el cableado de tu circuito:

**1. Alimentación Principal y Motores (L298N)**

* **Baterías (6V a 12V) \[Anodo / Positivo\]** ➡️ Pin **12V** del L298N  
* **Baterías \[Cátodo / Negativo\]** ➡️ Pin **GND** del L298N **y** pin **GND** del Arduino *(Tierra común)*  
* **Pin 5V del L298N** ➡️ Pin **5V** del Arduino *(Alimenta la placa)*  
* **Motor Derecho** ➡️ Bornes **OUT1** y **OUT2** del L298N  
* **Motor Izquierdo** ➡️ Bornes **OUT3** y **OUT4** del L298N \[[1](https://envistiamall.com/es/products/hc-sr04-ultrasonic-distance-measuring-transducer-sensor-module-for-arduino?srsltid=AfmBOoofkrQ-JCzf0qSA0_yCRSsd_06q7P2SoWzf-eZMVJmkw3n8GMIk)\]

**2. Control de Motores (Arduino ➡️ L298N)**

* **Pin Digital 5** (PWM) del Arduino ➡️ Pin **ENA** del L298N *(Velocidad Motor Derecho)*  
* **Pin Digital 6** del Arduino ➡️ Pin **IN1** del L298N *(Dirección Motor Derecho)*  
* **Pin Digital 7** del Arduino ➡️ Pin **IN2** del L298N *(Dirección Motor Derecho)*  
* **Pin Digital 8** del Arduino ➡️ Pin **IN3** del L298N *(Dirección Motor Izquierdo)*  
* **Pin Digital 9** del Arduino ➡️ Pin **IN4** del L298N *(Dirección Motor Izquierdo)*  
* **Pin Digital 10** (PWM) del Arduino ➡️ Pin **ENB** del L298N *(Velocidad Motor Izquierdo)*  
  *(Nota: Asegúrate de retirar los puentes/jumpers de plástico de ENA y ENB para poder conectar estos cables y controlar la velocidad).*

**3. Sensor Ultrasonido (Arduino ➡️ HC-SR04)**

* **Pin 5V** del Arduino ➡️ Pin **VCC** del HC-SR04  
* **Pin Digital 2** del Arduino ➡️ Pin **TRIG** del HC-SR04  
* **Pin Digital 3** del Arduino ➡️ Pin **ECHO** del HC-SR04  
* **Pin GND** del Arduino ➡️ Pin **GND** del HC-SR04 \[[1](https://cursos.mcielectronics.cl/2022/12/06/como-funciona-el-sensor-ultrasonico-hc-sr04-y-como-se-conecta-con-arduino/), [2](https://reversepcb.com/es/modulos-de-sensor-ultrasonico-hc-sr04/), [3](https://www.tecneu.com/blogs/tutoriales-de-electronica/adentrandonos-en-el-mundo-de-la-deteccion-ultrasonica-con-el-sensor-hc-sr04?srsltid=AfmBOopkgSIb38hiOXRbwquueHIgZ9pyWtNUmzTFkSIHXS9LE-1Pr8TZ)\]

**4. Servomotor (Arduino ➡️ SG90)**

* **Pin 5V** del Arduino ➡️ Cable **Rojo** (VCC) del SG90  
* **Pin Digital 11** (PWM) del Arduino ➡️ Cable **Naranja/Amarillo** (Señal) del SG90  
* **Pin GND** del Arduino ➡️ Cable **Marrón/Negro** (GND) del SG90 \[[1](https://m.media-amazon.com/images/I/71R6lx1GQEL.pdf?ref=dp_product_quick_view), [2](https://m.media-amazon.com/images/I/71R6lx1GQEL.pdf?ref=dp_product_quick_view)\]

---

#### 🛠️ Montaje Físico (Sensor sobre el Servo)

Para fijar el HC-SR04 sobre el SG90 y lograr el sistema de "radar", tienes tres opciones comunes:

1. **Soporte impreso en 3D:** Es la solución más limpia. Existen estructuras diseñadas específicamente para encajar el sensor y atornillarse directamente a las aspas plásticas del servo.  
2. **Cinta de doble cara acolchada:** Pega el reverso plano del sensor directamente sobre la cruceta plástica (hélice) del servo. Evita que los pines soldados del sensor toquen partes metálicas para prevenir cortocircuitos.  
3. **Pegamento caliente (Silicona):** Aplica una gota pequeña sobre el aspa del servo y une con cuidado la placa del HC-SR04.

---

### Uso del sensor shield v5.0

#### **📋 Diagrama de Cableado con Sensor Shield V5.0**

Para alimentar todo el conjunto usando el regulador del L298N de forma segura a través del Shield, realiza las siguientes conexiones:

**1\. Alimentación del Sistema (Borneras y Bloque Externo)**

* **Batería (6V-12V) \[Positivo\]** ➡️ Pin **12V** del L298N.  
* **Batería \[Negativo\]** ➡️ Pin **GND** del L298N.  
* **L298N Pin 5V** ➡️ Conéctalo directamente a la bornera azul de tornillos marcada como **VCC** (o entrada de energía externa) en el Sensor Shield V5.0. *(Esto alimenta al Shield y al Arduino desde abajo)*.  
* **L298N Pin GND** ➡️ Conéctalo a la bornera azul marcada como **GND** en el Sensor Shield V5.0 *(Tierra común obligatoria)*.

**2\. Control de Motores (L298N conectados a Pines Digitales del Shield)**

Cada señal va directamente a la fila de pines **"S" (Señal)** del número digital correspondiente en el Shield:

* Pin **ENA** del L298N ➡️ Pin Digital **5** (Fila S).  
* Pin **IN1** del L298N ➡️ Pin Digital **6** (Fila S).  
* Pin **IN2** del L298N ➡️ Pin Digital **7** (Fila S).  
* Pin **IN3** del L298N ➡️ Pin Digital **8** (Fila S).  
* Pin **IN4** del L298N ➡️ Pin Digital **9** (Fila S).  
* Pin **ENB** del L298N ➡️ Pin Digital **10** (Fila S).

**3\. Servomotor SG90 (Conexión Directa en Bloque G-V-S)**

El servo se conecta horizontalmente usando una sola fila de tres pines en el Shield:

* Cable **Marrón o Negro** (GND) ➡️ Pin Digital **11** (Fila **G**)  
* Cable **Rojo** (VCC) ➡️ Pin Digital **11** (Fila **V**)  
* Cable **Naranja o Amarillo** (Señal) ➡️ Pin Digital **11** (Fila **S**)

**4\. Sensor Ultrasonido HC-SR04**

<center>
<figure>
![](img/hc-sr04.png)
<figcaption>Placa de sensor HC-SR04.</figcaption>
</figure>
</center>

El sensor necesita alimentación y dos pines de señal. Los puedes tomar de las filas verticales de los pines **2** y **3**: 

* Pin **VCC** del HC-SR04 ➡️ Pin Digital **2** (Fila **V**)  
* Pin **TRIG** del HC-SR04 ➡️ Pin Digital **2** (Fila **S**)  
* Pin **ECHO** del HC-SR04 ➡️ Pin Digital **3** (Fila **S**)  
* Pin **GND** del HC-SR04 ➡️ Pin Digital **3** (Fila **G**)

---

⚠️ Notas de seguridad cruciales para este montaje:

* **Jumper SEL del Shield:** Asegúrate de que el jumper de alimentación externa en el shield esté configurado correctamente (conectando las borneras de tornillo al riel VCC) para que la corriente del L298N pase efectivamente a los sensores y al servo.  
* **Jumpers de velocidad del L298N:** Recuerda quitar los puentes físicos negros que unen los pines de ENA y ENB con sus respectivos pines lógicos de 5V en el módulo L298N, de lo contrario los pines digitales 5 y 10 del Arduino podrían dañarse por cortocircuito.




## Codigo

💻 Código de Prueba Base (Arduino IDE)Puedes cargar este código en tu Arduino para comprobar que el servo se mueve y el sensor mide la distancia correctamente al mismo tiempo:

```cpp
#include <Servo.h>

// Definición de pines
const int trigPin = 2;
const int echoPin = 3;
const int servoPin = 11;

Servo miServo;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  miServo.attach(servoPin);
}

void loop() {
  // Escaneo de 45 a 135 grados
  for (int angulo = 45; angulo <= 135; angulo += 15) {
    miServo.write(angulo);
    delay(300);
    long distancia = obtenerDistancia();
    
    Serial.print("Angulo: ");
    Serial.print(angulo);
    Serial.print(" | Distancia: ");
    Serial.concat(distancia);
    Serial.println(" cm");
  }
}

long obtenerDistancia() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  long duracion = pulseIn(echoPin, HIGH);
  long distanciaCm = duracion * 0.034 / 2;
  return distanciaCm;
}
```
El programa hace que el robot avance continuamente. El servo girará constantemente el sensor ultrasónico de izquierda a derecha. Si el sensor detecta un obstáculo a menos de 25 centímetros, el robot se detendrá, mirará a ambos lados para medir las distancias, y girará hacia el lado que tenga más espacio libre.

💻 Código Completo: Robot Evasor de Obstáculos

```cpp
#include <Servo.h>

// Pines del L298N (Motores)
const int ENA = 5;  // PWM Control de velocidad motor derecho
const int IN1 = 6;  // Dirección motor derecho
const int IN2 = 7;  // Dirección motor derecho
const int IN3 = 8;  // Dirección motor izquierdo
const int IN4 = 9;  // Dirección motor izquierdo
const int ENB = 10; // PWM Control de velocidad motor izquierdo

// Pines del HC-SR04 (Ultrasonido)
const int trigPin = 2;
const int echoPin = 3;

// Pin del SG90 (Servo)
const int servoPin = 11;

Servo miServo;

// Configuración de distancias y velocidad
const int distanciaLimite = 25; // Distancia en cm para activar la evasión
const int velocidadMotores = 180; // Velocidad del robot (Rango: 0 a 255)

void setup() {
  // Configurar pines de motores como salidas
  pinMode(ENA, OUTPUT);
  pinMode(ENB, OUTPUT);
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
  
  // Configurar pines del sensor
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  
  // Iniciar Servo en posición central (90 grados)
  miServo.attach(servoPin);
  miServo.write(90);
  
  delay(2000); // Espera de 2 segundos antes de iniciar el movimiento
}

void loop() {
  int distanciaCentro = obtenerDistancia();
  
  if (distanciaCentro <= distanciaLimite) {
    frenar();
    delay(300);
    retroceder();
    delay(400);
    frenar();
    delay(300);
    
    // Decidir hacia dónde girar
    int distanciaDerecha = mirarDerecha();
    delay(400);
    int distanciaIzquierda = mirarIzquierda();
    delay(400);
    
    if (distanciaDerecha >= distanciaIzquierda) {
      girarDerecha();
      delay(500); // Ajusta este tiempo para lograr un giro de ~90 grados
    } else {
      girarIzquierda();
      delay(500); // Ajusta este tiempo para lograr un giro de ~90 grados
    }
    frenar();
    delay(300);
  } else {
    avanzar();
  }
  delay(50);
}

// --- FUNCIONES DEL SENSOR ---

int obtenerDistancia() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  long duracion = pulseIn(echoPin, HIGH, 30000); // Timeout de 30ms si no hay eco
  if (duracion == 0) return 400; // Si no hay eco, asume camino libre
  
  int distanciaCm = duracion * 0.034 / 2;
  return distanciaCm;
}

int mirarDerecha() {
  miServo.write(20);
  delay(500);
  int distancia = obtenerDistancia();
  miServo.write(90); // Regresa al centro
  return distancia;
}

int mirarIzquierda() {
  miServo.write(160);
  delay(500);
  int distancia = obtenerDistancia();
  miServo.write(90); // Regresa al centro
  return distancia;
}

// --- FUNCIONES DE MOVIMIENTO (L298N) ---

void avanzar() {
  analogWrite(ENA, velocidadMotores);
  analogWrite(ENB, velocidadMotores);
  
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
}

void retroceder() {
  analogWrite(ENA, velocidadMotores);
  analogWrite(ENB, velocidadMotores);
  
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
}

void girarDerecha() {
  analogWrite(ENA, velocidadMotores);
  analogWrite(ENB, velocidadMotores);
  
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH); // Motor derecho va hacia atrás
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);  // Motor izquierdo va hacia adelante
}

void girarIzquierda() {
  analogWrite(ENA, velocidadMotores);
  analogWrite(ENB, velocidadMotores);
  
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);  // Motor derecho va hacia adelante
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH); // Motor izquierdo va hacia atrás
}

void frenar() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, LOW);
}

```