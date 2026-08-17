# Auto robot evasor de obtaculos

## hardware
- 1 chassis
- 1 switch on/off
- 2 wheel
- 1 hammer caster
- 2 decelaration  DC motor
- 1 sensor HC-SR04(detecta obstaculos)
- 1 Arduino UNO board
- 1 Arduino Sensor Shield v5.0
- 1 battery case (4 battery AA)
- 1 Dual H-Bridge motor driver module L298N
- 1 Microservo SG90

En base a la lista de hardware, Necesito el diagrama de conexiones para crear este auto robot sensor de obstaculos. todos los conectores deben ir al "sensor shield v5.0" e incluir el switch para encender o apagar el circuito. Todos los sensores deben conectar al "Arduino sensor shield".
- El interruptor (switch) debe conectarse directamente al sensor shield para controlar la alimentación general del circuito.
- El servo SG90 debe usarse para mover el sensor ultrasónico HC-SR04 para escanear obstáculos en diferentes ángulos.
- El diagrama de conexiones debe ser detallado y debe incluir también las asignaciones de pines específicos en el sensor shield (por ejemplo, qué puerto digital/análogo se usa para cada componente).

La investigación se enfoca en diseñar un esquema eléctrico funcional para un robot autónomo capaz de evitar obstáculos utilizando componentes específicos: Arduino UNO, Arduino sensor shield v5.0, sensor ultrasónico HC-SR04, módulo L298N, servo SG90, 2 motores DC, chasis y baterías (4 x AA). El objetivo es definir con precisión cómo conectar cada componente al shield, respetando sus interfaces disponibles (digital, analógico, I2C, PWM). Se requiere que el interruptor controle directamente la alimentación general del circuito a través del shield, y que el servo SG90 esté conectado para rotar el sensor ultrasónico, permitiendo un escaneo angular. El diagrama debe incluir asignaciones de pines explícitas en el shield (por ejemplo, qué puerto digital o analógico se usa para cada señal: trigger/echo del sensor, control de motores, señal de servo, entrada del switch). El alcance se limita estrictamente a la configuración física y de conexiones descrita, sin extenderse a programación, algoritmos de navegación o análisis de rendimiento.

Detecta si las conexiones iniciales son correctas:

conexiones iniciales del L298N al "sensor shield v5.0":
const int pinENA = 6;  // Pin PWM para control de velocidad
const int pinIN1 = 2;  // Pin de dirección 1
const int pinIN2 = 7;  // Pin de dirección 2

// --- DEFINICIÓN DE PINES DE CONTROL (MOTOR B - DERECHO) ---
const int pinENB = 5;  // Pin PWM para control de velocidad
const int pinIN3 = 4;  // Pin de dirección 1
const int pinIN4 = 3;  // Pin de dirección 2

genera programas de pruebas individuales para:
- probar el sensor HC-SR04
- probar el servo SG90
- Probar el servo SG90 junto al Hc-SR04
- probar los motores controlados por el L298N

Genera un programa completo para ejecutar el movimiento del robot (avance, retroceso, giro derecha, giro izquierda) basado en la detección de obstaculos

Este cuaderno esta orientado a ser un manual de curso para alumnos sin experiencia en robotica o en programacion en lenguaje C++. Todas las respuestas deben ser claras y completas sin restar rigurosidad técnica.
Si no se indica otra cosa, los ejemplos deben ser orientados al uso de placas Arduino, en particular Arduino Uno.
Todos los ejemplos de código de programación deben ser en C++, a menos que se indique en otro lenguaje.